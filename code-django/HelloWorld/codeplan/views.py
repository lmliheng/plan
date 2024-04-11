from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from .models import Plan

def index(request):
    plans = Plan.objects.all()
    
    return render(request, 'index.html', {'plans': plans})