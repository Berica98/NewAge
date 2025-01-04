from rest_framework import serializers
from teachers.models import Teachers  
class TeacherSerializer(serializers.Serializer):
    pk = serializers.IntegerField(read_only=True)  
    first_name = serializers.CharField(max_length=50)
    last_name = serializers.CharField(max_length=50)
    email = serializers.EmailField()
    phone_number = serializers.CharField(max_length=15, required=False, allow_blank=True)
    gender = serializers.CharField(max_length=1)
    employee_id = serializers.CharField(max_length=20)
    date_joined = serializers.DateField()

    def create(self, validated_data):
        """
        Create and return a new `Teacher` instance, given the validated data.
        """
        return Teachers.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Teacher` instance, given the validated data.
        """
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.email = validated_data.get('email', instance.email)
        instance.phone_number = validated_data.get('phone_number', instance.phone_number)
        instance.address = validated_data.get('address', instance.address)
        instance.gender = validated_data.get('gender', instance.gender)
        instance.employee_id = validated_data.get('employee_id', instance.employee_id)
        instance.qualification = validated_data.get('qualification', instance.qualification)
        instance.date_joined = validated_data.get('date_joined', instance.date_joined)
        instance.experience = validated_data.get('experience', instance.experience)
        instance.is_active = validated_data.get('is_active', instance.is_active)
        instance.save()
        return instance

