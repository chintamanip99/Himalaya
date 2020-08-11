from django.db import models
from rest_framework.authtoken.models import Token
from django.core.validators import RegexValidator
import datetime
from customers.models import Customer
from payment.models import PaymentModel
from brands.models import BrandModel

class Receipts(models.Model):
	customer=models.ForeignKey(Customer,on_delete=models.DO_NOTHING)
	payment_method=models.ForeignKey(PaymentModel,on_delete=models.DO_NOTHING)
	total_discount=models.FloatField(null=False, blank=0.0, default=0.0)
	total_amount=models.FloatField(null=False, blank=0.0, default=0.0)
	amount_payable=models.FloatField(null=False, blank=0.0, default=0.0)
	receipt_pdf=models.FileField(null=True,blank=True)
	date_time=models.DateTimeField(default=datetime.datetime.now().replace(tzinfo=None),auto_now=False, auto_now_add=False,null=True,blank=False)
	def __str__(self):
		return self.customer.fname+"-"+self.customer.lname+"-"+str(self.date_time)

class Sales(models.Model):
	receipt=models.ForeignKey(Receipts,on_delete=models.DO_NOTHING)
	brand=models.ForeignKey(BrandModel,on_delete=models.DO_NOTHING)
	quantity=models.IntegerField(null=False,default=1,blank=False)
	selling_price=models.FloatField(null=False, blank=0.0, default=0.0)
	def __str__(self):
		return self.brand.item.name
