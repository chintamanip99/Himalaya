# Generated by Django 3.0.5 on 2020-08-07 09:42

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0006_auto_20200807_0937'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='date',
            field=models.DateField(default=datetime.date(2020, 8, 7), null=True),
        ),
    ]
