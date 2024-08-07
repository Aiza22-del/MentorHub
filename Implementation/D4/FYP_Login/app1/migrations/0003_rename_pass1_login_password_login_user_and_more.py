# Generated by Django 5.0.2 on 2024-03-19 17:27

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0002_rename_pass1_signup_password_remove_signup_pass2'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RenameField(
            model_name='login',
            old_name='pass1',
            new_name='password',
        ),
        migrations.AddField(
            model_name='login',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='logins', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='login',
            name='user_identifier',
            field=models.CharField(default='New User', max_length=100),
        ),
    ]
