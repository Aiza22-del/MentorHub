from django.contrib.auth.models import User
from django.db import models

class Signup(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE) 
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128) 

    class Meta:
        unique_together = ['email']


class Login(models.Model):
    DEFAULT_USER_IDENTIFIER = "default_identifier"
    
    user = models.ForeignKey(User, related_name='logins', on_delete=models.CASCADE)
    username = models.CharField(max_length=150) 
    password = models.CharField(max_length=128) 

    @staticmethod
    def authenticate(username, password):
        user = User.objects.filter(username=username).first()
        if user and user.check_password(password):
            return user
        return None

