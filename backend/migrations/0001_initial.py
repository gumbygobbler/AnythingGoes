# Generated by Django 4.2.7 on 2023-12-02 05:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='fighter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('manager', models.CharField(max_length=200)),
                ('fighterImg', models.FileField(upload_to='')),
            ],
        ),
    ]
