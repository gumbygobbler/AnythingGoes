from rest_framework import serializers
from .models import fighter
from .models import manager
from django.contrib.auth.models import User
class fighterSerializer(serializers.ModelSerializer):
    class Meta:
        model = fighter
        fields = ['id', 'name', 'manager', 'fight', 'fighterImg']

class managerSerializer(serializers.ModelSerializer):
    class Meta:
        model = manager
        fields = ['id', 'name', 'userID']
