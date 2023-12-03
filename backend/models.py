from django.db import models

def upload_to(instance, filename) :
    return 'fighters/{filename}'.format(filename=filename)

class fighter(models.Model):
    name = models.CharField(max_length = 200)
    manager = models.CharField(max_length = 200)
    fighterImg = models.ImageField(null = False, blank=False, upload_to ="images/")

    def __str__(self):
        return self.name
    

    