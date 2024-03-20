from django.contrib import admin
from app1.models import Signup, Login

class SignupAdmin(admin.ModelAdmin):
    list_display = ('user', 'email')
    search_fields = ('user', 'email')

class LoginAdmin(admin.ModelAdmin):
    list_display = ('username', 'user_email',)  
    search_fields = ('username' , 'user__email',) 

    def user_email(self, obj):
        return obj.user.email if obj.user else None 

    user_email.short_description = 'Email'

admin.site.register(Signup, SignupAdmin)
admin.site.register(Login, LoginAdmin)
