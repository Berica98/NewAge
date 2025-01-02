from django.db import models
from classes.models import Class, specialized
from gender.models import gender
from django.utils.timezone import now
from subjects.models import subjects
from django.contrib.auth.hashers import make_password

# Create your models here.

class Registration(models.Model):
    class_assigned = models.ForeignKey(Class, on_delete=models.CASCADE)
    special_assigned = models.ForeignKey(specialized, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    gender = models.ForeignKey(gender,on_delete=models.CASCADE )
    age = models.IntegerField()
    father_name = models.CharField(max_length=200)
    mother_name = models.CharField(max_length=200)
    address_name = models.CharField(max_length=500)
    email = models.EmailField(max_length=200, unique=True)
    phone_number = models.CharField(max_length=200,unique=True)
    username = models.CharField(max_length=200,unique=True,blank=True)
    password = models.CharField(max_length=200, blank=True)
    image = models.ImageField(upload_to='images/')
    subjects = models.ManyToManyField(subjects)
    date_of_registration = models.DateTimeField(default=now)
    

    """
    generating uniquse username and use is as password too
    """
    def generate_unique_username(self):
        current_year = now().year % 100
        class_code = self.class_assigned.class_name  # Assuming 'Class' model has a 'code' field
        specail_code = self.special_assigned.class_name  
        prefix = "NW"
        # Count existing registrations for the same class and year
        existing_count = Registration.objects.filter(
            class_assigned=self.class_assigned,
            special_assigned=self.special_assigned,
            date_of_registration__year=current_year
        ).count()
        
        return f"{prefix}/{current_year:02}/{class_code}/{specail_code}/{existing_count + 1:03d}"
    """
    save it to database
    """
    def save(self, *args, **kwargs):
        if not self.username:
            self.username = self.generate_unique_username()
            self.password = self.generate_unique_username() #making username to be same as passwowrd
            if not self.password.startswith('pbkdf2_'): # Avoid re-hashing
                self.password = make_password(self.password)
        super().save(*args, **kwargs)

    
    def __str__(self):
        return f"Student ID:  {self.username}passworld id:  {self.password} "