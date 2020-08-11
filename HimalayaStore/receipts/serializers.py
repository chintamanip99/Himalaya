from rest_framework import serializers
from .models import Receipts
from payment.models import PaymentModel
from payment.serializers import PaymentSerializer
from customers.serializers import CustomerSerializer

class ReceiptsSerializer(serializers.ModelSerializer):
	payment_method=PaymentSerializer()
	customer=CustomerSerializer()
	class Meta:
		model=Receipts
		exclude=[]