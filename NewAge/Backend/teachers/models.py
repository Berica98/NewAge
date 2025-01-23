from django.db import models
from gender.models import gender

# Create your models here.

class Teachers(models.Model):
        first_name = models.CharField(max_length=50)
        last_name = models.CharField(max_length=50)
        email = models.EmailField(unique=True)
        phone_number = models.CharField(max_length=15, null=True, blank=True)
        gender = models.ForeignKey(gender,on_delete=models.CASCADE )
        employee_id = models.CharField(max_length=20, unique=True)
        qualification = models.TextField(null=True, blank=True)
        date_joined = models.DateField()
        profile_picture = models.ImageField(upload_to='teacher_profiles/', null=False, blank=False)
        bio= models.TextField(null=True, blank=True)


        def __str__(self):
                return f"{self.first_name} {self.last_name} ({self.employee_id})"
