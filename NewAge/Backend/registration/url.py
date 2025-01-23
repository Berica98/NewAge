from . import views
from django.urls import path
from django.http import JsonResponse

urlpatterns = [
    path('api/v1/students/', views.get_all_students, name='get_all_students'),
    #path('api/v1/announcement/<int:class_id>/', views.get_announcement, name='get_announcement')
    path('api/v1/students/login/', views.login_view, name='login_view')
]