from rest_framework import serializers
from app1.models import Login, Signup


class LoginSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Login
        fields = "__all__"

class SignupSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source='user.username', required=True)  
    class Meta:
        model = Signup
        fields = ['user_name', 'email', 'password']

    def create(self, validated_data):
        user_name = validated_data.pop('user_name')

        user, created = user.objects.get_or_create(username=user_name)

        signup = Signup.objects.create(user=user, **validated_data)
        
        return signup