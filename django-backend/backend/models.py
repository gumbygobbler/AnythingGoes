from django.db import models
from django.contrib.auth.models import User

def upload_to(instance, filename) :
    return 'fighters/{filename}'.format(filename=filename)
    
class manager(models.Model):
    name = models.CharField(max_length = 200)
    
    userId = models.OneToOneField(
        User, 
        on_delete=models.CASCADE,
    )
    
    # FightsIn = models.ForeignKey(
    #     fight,
    #     on_delete=models.PROTECT,
    #     blank = True
    # )
    
    def __str__(self):
        return self.name
    
class fight(models.Model):
    name = models.CharField(max_length = 400)
    
    voteCount1 = models.PositiveIntegerField(default = 0)
    voteCount2 = models.PositiveIntegerField(default = 0)
    
    def __str__(self):
        return self.name    

class fighter(models.Model):
    name = models.CharField(max_length = 200)
    
    manager = models.ForeignKey(
        manager,
        on_delete=models.CASCADE,
        blank=False,
        #default=-1
    )
    
    fight = models.ForeignKey(
        fight, 
        on_delete=models.CASCADE,
    )

    #manager = models.CharField(max_length = 200)
    fighterImg = models.ImageField(null = False, blank=False, upload_to ="images/")

    def __str__(self):
        return self.name    
    
