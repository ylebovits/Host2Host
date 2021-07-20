from django.db import models
from django.core.validators import MinValueValidator, RegexValidator


class User(models.Model):
    first_name = models.CharField(verbose_name="User's first name", max_length=150, blank=False)
    last_name = models.CharField(verbose_name="User's first name", max_length=150, blank=False)
    age = models.IntegerField(validators=[
        MinValueValidator(18)
    ], blank=False)

    email = models.EmailField(blank=False)  # doubles as username
    phone_number = models.CharField(max_length=100, blank=False)

    password = models.CharField(validators=[
        RegexValidator(regex='^.{4,}$',
                       message='Length has to be 4',
                       code='nomatch')],
        max_length=30, blank=False)
