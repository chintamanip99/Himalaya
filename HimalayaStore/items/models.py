from django.db import models

class ItemModel(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=50)

    def __str__(self):
        return str(self.id)+self.name
