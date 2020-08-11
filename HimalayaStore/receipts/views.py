from django.shortcuts import render
from .models import Receipts,Sales
import datetime
from brands.models import BrandModel
from payment.models import PaymentModel
from customers.models import Customer
from requirements import success,error
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import FileUploadParser
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.response import Response
from io import BytesIO
from django.core.files import File
from .utils import render_to_pdf
from rest_framework.pagination import PageNumberPagination
from .serializers import ReceiptsSerializer
from rest_framework.views import APIView
from rest_framework import filters
# Create your views here.
class StandardResultsSetPagination(PageNumberPagination,APIView):
    page_size = Receipts.objects.all().count()
    page_size_query_param = 'page_size'

    def get_paginated_response(self, data):
    	try:
    		response={
    		'links': {
    		'next': self.get_next_link(),
    		'previous': self.get_previous_link()
    		},
    		'total': self.page.paginator.count,
    		'page_size': int(self.request.GET.get('page_size', self.page_size)),
    		'results': data
    		}
    		response_message=success.APIResponse(200,response).respond()
    	except Exception as e:
    		response_message=error.APIErrorResponse(404,{'error':str(e)}).respond()
    	finally:
    		return Response(response_message)

class Receipt(generics.ListAPIView):
	permission_classes = [(IsAuthenticated)]
	parser_class = (FileUploadParser,MultiPartParser,FormParser,JSONParser)
	pagination_class=StandardResultsSetPagination
	queryset=Receipts.objects.filter(date_time__date=datetime.datetime.today())
	serializer_class=ReceiptsSerializer
	filter_backends = [filters.SearchFilter]
	search_fields  = ['customer__fname','customer__lname','customer__mobile']

	def post(self, request):
		try:
			customer=None
			receipt=None
			total_amount=0.0
			if(len(request.data['fname'])>0 and len(request.data['lname'])>0 and len(request.data['mobile'])==10 and request.data['mobile'].isdigit()):
				try:
					customer=Customer.objects.get(mobile=request.data['mobile'])
					customer.fname=request.data['fname']
					customer.lname=request.data['lname']
					customer.save()
				except Customer.DoesNotExist:
					customer=Customer.objects.create(
						mobile=request.data['mobile'],
						fname=request.data['fname'],
						lname=request.data['lname']
						)
					customer.save()
				finally:
					receipt=Receipts.objects.create(
						customer=customer,
						payment_method=PaymentModel.objects.get(id=int(request.data['payment_method'])),
						total_discount=float(request.data['total_discount']),
						total_amount=float(request.data['total_amount']),
						amount_payable=float(request.data['amount_payable']),
						date_time=datetime.datetime.now().replace(tzinfo=None)
						)
					receipt.save()
					for i in request.data['items']:
						sales=Sales.objects.create(
							receipt=receipt,
							brand=BrandModel.objects.get(id=int(i['brand'])),
							quantity=int(i['quantity']),
							selling_price=float(i['selling_price'])
							)
						sales.save()
					context = {'receipt':receipt,'sales_list':Sales.objects.filter(receipt=receipt)}
					pdf = render_to_pdf('invoice.html', context)
					filename = receipt.customer.fname+"_"+receipt.customer.lname+"_"+str(receipt.date_time.date())+"_"+str(receipt.date_time.time())+".pdf"
					receipt.receipt_pdf.save(filename, File(BytesIO(pdf.content)))
					receipt.save()
					response_message=success.APIResponse(200,{'receipt_link':receipt.receipt_pdf.url}).respond()
			else:
				response_message=error.APIErrorResponse(404,{'invalid_customer_credentials':'Invalid Customer Credentials'}).respond()
		except Exception as e:
			response_message=error.APIErrorResponse(404,{'error3':str(e)}).respond()
		finally:
			return Response(response_message)

class SalesForGraph(generics.ListAPIView):
	permission_classes = [(IsAuthenticated)]
	parser_class = (FileUploadParser,MultiPartParser,FormParser,JSONParser)
	pagination_class=StandardResultsSetPagination
	queryset=Receipts.objects.filter(date_time__date=datetime.datetime.today()).order_by('-date_time')
	serializer_class=ReceiptsSerializer
	filter_backends = [filters.SearchFilter]
	search_fields  = ['customer__fname','customer__lname','customer__mobile']