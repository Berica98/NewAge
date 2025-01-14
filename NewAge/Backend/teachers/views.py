from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework import status
from teachers.models import Teachers  # Replace `your_app_name` with your app name
from teachers.serializers import TeacherSerializer


class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


@csrf_exempt
def teacher_list(request):
    """
    Handle GET and POST requests for the Teacher model.
    """
    if request.method == 'GET':
        teachers = Teachers.objects.all()
        teachers_serializer = TeacherSerializer(teachers, many=True)
        return JSONResponse(teachers_serializer.data)

    elif request.method == 'POST':
        teacher_data = JSONParser().parse(request)
        teacher_serializer = TeacherSerializer(data=teacher_data)
        if teacher_serializer.is_valid():
            teacher_serializer.save()
            return JSONResponse(teacher_serializer.data, status=status.HTTP_201_CREATED)
        return JSONResponse(teacher_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def teacher_detail(request, pk):
    """
    Handle GET, PUT, and DELETE requests for a single Teacher instance.
    """
    try:
        teacher = Teachers.objects.get(pk=pk)
    except Teachers.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        teacher_serializer = TeacherSerializer(teacher)
        return JSONResponse(teacher_serializer.data)

    elif request.method == 'PUT':
        teacher_data = JSONParser().parse(request)
        teacher_serializer = TeacherSerializer(teacher, data=teacher_data)
        if teacher_serializer.is_valid():
            teacher_serializer.save()
            return JSONResponse(teacher_serializer.data)
        return JSONResponse(teacher_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        teacher.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

