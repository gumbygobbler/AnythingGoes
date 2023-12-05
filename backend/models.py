from django.db import models

class fighter(models.Model):
    name = models.CharField(max_length = 200)
    manager = models.CharField(max_length = 200)
    fighterImg = models.ImageField()

    def __str__(self):
        return self.name
    

    