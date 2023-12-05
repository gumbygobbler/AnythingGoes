from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class user(models.Model):
    username: models.CharField(max_length = 200)
    password: models.CharField(max_length = 200)

    def __str__(self):
        return self.name