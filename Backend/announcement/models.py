from django.db import models
from classes.models import Class, specialized
from django.utils.timezone import now

# Create your models here.
class Announcment(models.Model):
    class_assigned = models.ForeignKey(Class, on_delete=models.CASCADE)
    #specialized_assigned = models.ForeignKey(specialized, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    body = models.TextField(default=" ")
    date_creation = models.DateTimeField(default=now)

    def __str__(self):
        return f"Announcement for {self.class_assigned}: {self.title}"
