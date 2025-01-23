from rest_framework import serializers
from .models import Registration

"""
serialization of the announcement
"""
class RegistrationSerializer(serializers.ModelSerializer):
    class_assigned = serializers.CharField(source='class_assigned.class_name')
    special_assigned = serializers.CharField(source='special_assigned.class_name')
    gender = serializers.CharField(source='gender.name')
    subjects = serializers.StringRelatedField(many=True)  # Assumes __str__ in subjects model returns its name
    class Meta:
        model = Registration
        #fields = '__all__'
        fields = [
            'first_name', 'last_name', 'age', 'father_name', 'mother_name',
            'address_name', 'email', 'phone_number', 'username', 'image',
            'date_of_registration', 'class_assigned', 'special_assigned',
            'gender', 'subjects'
        ]