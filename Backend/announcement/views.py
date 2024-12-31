from django.shortcuts import render
from .models import Announcment
from .models import Class
#from django.db.models import Q
from django.http import JsonResponse, HttpResponse
from .serializers import AnouncmentSerializer
from rest_framework.decorators import api_view

# Create your views here.
def home(request):
    return HttpResponse("hello world")

@api_view(['GET'])
def get_all_announcement(request):
    """
    fatch all the annonucement
    """
    try:
        announcment = Announcment.objects.all()  # Retrieve all announcements

        serializer = AnouncmentSerializer(announcment, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)

    except Exception as e:
        return JsonResponse({"error":str(e)}, status=500)
    

@api_view(['GET'])
def get_announcement(request, class_id):
    """
        fetch all announcement for a specific class and specialization
    """
    try:
       
         # Fetch class object by both criteria
        class_obj = Class.objects.get(id=class_id)
        if not class_obj:
            return JsonResponse({"error": "Class not found"}, status=404)
        # Fetch announcements for the class
        announcements = Announcment.objects.filter(class_assigned=class_obj)
       # Serialize announcements
        serializer = AnouncmentSerializer(announcements, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)
    except Exception as e:
        return JsonResponse({"error":str(e)}, status=500)

