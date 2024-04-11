from django.urls import path,include
from . import views

app_name = 'codeplan'

urlpatterns = [
    path('', views.index, name='codeplan'),
]