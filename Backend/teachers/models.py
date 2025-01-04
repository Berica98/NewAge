from django.db import models

# Create your models here.

class Teachers(models.Model):
        GENDER_CHOICES = [
                ('M', 'Male'),
                ('F', 'Female'),
                ('O', 'Other'),
        ]

        first_name = models.CharField(max_length=50)
        last_name = models.CharField(max_length=50)
        email = models.EmailField(unique=True)
        phone_number = models.CharField(max_length=15, null=True, blank=True)
        gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
        employee_id = models.CharField(max_length=20, unique=True)
        qualification = models.TextField(null=True, blank=True)
        date_joined = models.DateField()
        profile_picture = models.ImageField(upload_to='teacher_profiles/', null=False, blank=False)
        bio= models.TextField(null=True, blank=True)


        def __str__(self):
                return f"{self.first_name} {self.last_name} ({self.employee_id})"
