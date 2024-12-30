from . import views
from django.urls import path
from django.http import JsonResponse

urlpatterns = [
    path('', views.home, name='home'),
  
    #path('create/', views.create_annoucement, name='create_announcement'),
    path('api/v1/announcement/', views.get_all_announcement, name='get_all_announcement'),
    path('api/v1/announcement/<int:class_id>/', views.get_announcement, name='get_announcement')
]