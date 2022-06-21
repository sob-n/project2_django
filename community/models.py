from django.db import models
from django.contrib.auth.models import User
# from user.models import User

class Community(models.Model):
    content = models.CharField(max_length=800)
    create_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(null=True,blank=True)
    author = models.ForeignKey(User,on_delete=models.CASCADE)
    category = models.CharField(max_length=3)
    region = models.CharField(max_length=20)

class Comment(models.Model):
    author = models.ForeignKey(User,on_delete=models.CASCADE)
    content_id = models.IntegerField()
    create_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(null=True,blank=True)
    likes = models.IntegerField(default=0)
    comment = models.CharField(max_length=200)

class Report(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    report_date = models.DateTimeField(auto_now_add=True)
    url = models.CharField(max_length=80)