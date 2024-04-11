from django.db import models

# Create your models here.


class Plan(models.Model):
    title = models.CharField(max_length=10)
    one = models.CharField(max_length=20)
    two = models.CharField(max_length=20)
    three = models.CharField(max_length=20)
    four = models.CharField(max_length=20)
    five = models.CharField(max_length=20)
    six = models.CharField(max_length=20)
    seven = models.CharField(max_length=20)
    

    def __str__(self):
        return self.title