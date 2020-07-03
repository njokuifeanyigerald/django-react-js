from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.validators import UniqueValidator
from django.core.validators import RegexValidator

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id', 'username', 'email'
        ]


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(validators=[UniqueValidator(queryset=User.objects.all())])
    # password = serializers.CharField(min_length=8, validators=[RegexValidator('^(\w+\d+|\d+\w+)+$', message="Password should be a combination of Alphabets and Numbers")])
    password = serializers.CharField(min_length=8)

    def validate_password(self, value):
        if value.isalnum():
            raise serializers.ValidationError('password must have atleast one special character.')
        return value
        
    class Meta:
        model = User
        fields = [
            'id', 'username', 'email', 'password'
        ]
        extra_kwargs = {'password': {'write_only':True}}
        def create(self, validated_data):
            user= User.objects._create_user(validated_data['username'],
            validated_data['email'],validated_data['password'])
            return user
        # def create(self, validated_data):
        #     user = super(RegisterSerializer, self).create(validated_data)
        #     user.set_password(validated_data['password'])
        #     user.save()
        #     return user
       


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self,data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError('incorrect credentials')
