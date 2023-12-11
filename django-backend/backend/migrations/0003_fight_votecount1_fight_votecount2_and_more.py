# Generated by Django 4.2.7 on 2023-12-11 04:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_rename_userid_manager_userid'),
    ]

    operations = [
        migrations.AddField(
            model_name='fight',
            name='voteCount1',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='fight',
            name='voteCount2',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='fighter',
            name='fight',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.fight'),
        ),
    ]