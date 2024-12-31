from rest_framework import serializers
from .models import Registration

"""
serialization of the announcement
"""
class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = '__all__'