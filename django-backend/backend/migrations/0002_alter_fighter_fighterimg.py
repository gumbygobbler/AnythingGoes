# Generated by Django 4.2.7 on 2023-12-03 05:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fighter',
            name='fighterImg',
            field=models.ImageField(upload_to='images/'),
        ),
    ]