from rest_framework import serializers
from .models import fighter

class fighterSerializer(serializers.ModelSerializer):
    class Meta:
        model = fighter
        fields = ['id', 'name', 'manager', 'fighterImg']