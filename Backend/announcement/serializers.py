from rest_framework import serializers
from .models import Announcment

class AnouncmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcment
        fields = '__all__'