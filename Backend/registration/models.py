from django.db import models
from classes.models import Class, specialized
from gender.models import gender
from django.utils.timezone import now
from subjects.models import subjects

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
    #username = models.CharField(max_length=200,unique=True,blank=True)
    password = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images/')
    subjects = models.ManyToManyField(subjects)
    date_of_registration = models.DateTimeField(default=now)
    


    def generate_unique_username(self):
        current_year = now().year
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
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"