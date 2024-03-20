
from django.contrib import admin
from django.urls import path,include
from app1.views import SignupViewSet,LoginViewSet
from rest_framework import routers


router= routers.DefaultRouter()
router.register(r'http://localhost:8000/app1/signup/', SignupViewSet, basename='signup')
router.register(r'http://localhost:8000/app1/login/', LoginViewSet, basename='login')

urlpatterns = [    
    path('',include(router.urls))     
]
