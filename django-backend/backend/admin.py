from django.contrib import admin
from .models import fighter
from .models import fight
from .models import manager

admin.site.register(manager)
admin.site.register(fight)
admin.site.register(fighter)