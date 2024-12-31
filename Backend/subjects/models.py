from django.db import models
from classes.models import Class

# Create your models here.
class subjects(models.Model):
    class_assigned = models.ForeignKey(Class, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.class_assigned} {self.name}'