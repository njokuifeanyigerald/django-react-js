from django.db import models
from django.contrib.auth.models import User


class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100, unique=True)
    message = models.CharField(max_length=1000, blank=True)
    owner = models.ForeignKey(User, related_name='leads', on_delete = models.CASCADE, null=True)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.email
    
    class Meta:
        verbose_name_plural ="leads"