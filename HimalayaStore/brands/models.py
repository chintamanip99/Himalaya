from django.db import models
from items.models import ItemModel
class BrandModel(models.Model):
    id=models.AutoField(primary_key=True)
    item=models.ForeignKey(ItemModel,on_delete=models.CASCADE)
    name=models.CharField(max_length=50)
    quantity=models.IntegerField(null=True)
    cost_price=models.FloatField(null=False, blank=0.0, default=0.0)

    def __str__(self):
        return self.item.name+" "+self.name+" "+str(self.quantity)+"id:"+str(self.id)
