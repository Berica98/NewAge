from django.shortcuts import render
from .models import Registration
from django.http import JsonResponse, HttpResponse
from .serializers import RegistrationSerializer
from rest_framework.decorators import api_view

# Create your views here.
def home(request):
    return HttpResponse("hello world")

@api_view(['GET'])
def get_all_students(request):
    """
    fatch all the annonucement
    """
    try:
        Register = Registration.objects.all()  # Retrieve all announcements

        serializer = RegistrationSerializer(Register, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)

    except Exception as e:
        return JsonResponse({"error":str(e)}, status=500)
