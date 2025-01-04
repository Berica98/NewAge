#from django.conf.urls import url
from django.urls import path, re_path
#from toys import views 
from . import views

urlpatterns = [
	#url(r'^teachers/$', views.teachers_list),
	#url(r'^teachers/(?P<pk>[0-9]+)$', views.teachers_detail),
    re_path(r'^teachers/(?P<pk>[0-9]+)$', views.teacher_detail),
    path('api/v1/teachers/', views.teacher_list, name='teacher_list'),
]
