from django.conf.urls import url
from toys import views 

urlpatterns = [
	url(r'^teachers/$', views.teachers_list),
	url(r'^teachers/(?P<pk>[0-9]+)$', views.teachers_detail),
]
