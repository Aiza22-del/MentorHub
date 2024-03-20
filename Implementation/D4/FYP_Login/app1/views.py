from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from django.http import HttpResponse
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets
from app1.models import Login, Signup
from rest_framework import status
from app1.serializers import SignupSerializer, LoginSerializer
from django.contrib.auth.decorators import login_required

class SignupViewSet(viewsets.ModelViewSet):
    queryset = Signup.objects.all()
    serializer_class = SignupSerializer
  
    @action(detail=True, methods=['get'])
    def logins(self, request, pk=None):   
        try:                
            signup = Signup.objects.get(pk=pk)
            logins = Login.objects.filter(user=signup.user)
            login_serializer = LoginSerializer(logins, many=True, context={'request': request})
            return Response(login_serializer.data)
        except Signup.DoesNotExist:
            return Response({'message': 'User not Found'})

class LoginViewSet(viewsets.ViewSet):
    def post(self, request):
   
        username = request.data.get('username')
        password = request.data.get('password')


        user = authenticate(request, username=username, password=password)
        if user:

            login(request, user)
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        else:
            return Response({'message': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)