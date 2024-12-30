from django.db import models

# Create your models here.
class Class(models.Model):
    class_name = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.class_name
    


class specialized(models.Model):
    class_name = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.class_name
