# Generated by Django 3.0.5 on 2020-08-09 13:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('brands', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='brandmodel',
            name='quantity',
            field=models.IntegerField(null=True),
        ),
    ]
