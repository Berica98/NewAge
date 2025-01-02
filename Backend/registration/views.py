from django.shortcuts import render
from .models import Registration
from django.http import JsonResponse, HttpResponse
from .serializers import RegistrationSerializer
from django.contrib.auth.hashers import check_password
from django.views.decorators.csrf import csrf_exempt
import json

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
    


"""
login for the sudents
"""
@csrf_exempt
def login_view(request):
    if request.method == "POST":
        try:
            # Parse the request body
            data = json.loads(request.body)
            username = data.get("username")
            password = data.get("password")
            
            # Validate input
            if not username or not password:
                return JsonResponse({"success": False, "message": "Username and password are required."}, status=400)
            
            # Check if user exists
            try:
                user = Registration.objects.get(username=username)
            except Registration.DoesNotExist:
                return JsonResponse({"success": False, "message": "Invalid username or password."}, status=401)
            
            # Validate password
            if check_password(password, user.password):
                return JsonResponse({"success": True, "message": "Login successful."})
            else:
                return JsonResponse({"success": False, "message": "Invalid username or password."}, status=401)
        
        except json.JSONDecodeError:
            return JsonResponse({"success": False, "message": "Invalid JSON format."}, status=400)
    else:
        return JsonResponse({"success": False, "message": "Invalid request method. Use POST."}, status=405)

