from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator, RegexValidator
from django.db import models
from django.db.models.fields.files import ImageField
from django.utils import timezone


class User(models.Model):
    first_name = models.CharField(verbose_name="User's first name", max_length=150, blank=False)
    last_name = models.CharField(verbose_name="User's first name", max_length=150, blank=False)
    age = models.IntegerField(validators=[
        MinValueValidator(18)
    ], blank=False)

    email = models.EmailField(blank=False, unique=True)  # doubles as username
    phone_number = models.CharField(max_length=100, unique=True, blank=False)

    password = models.CharField(validators=[
        RegexValidator(regex='^.{4,}$',
                       message='Length has to be 4',
                       code='nomatch')],
        max_length=30, blank=False)


class Venue(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=False)
    location = models.CharField(blank=False, max_length=128)
    no_pictures = models.IntegerField(default=0)  # store number of pictures currently set for this location
    description = models.TextField(blank=False, editable=True, max_length=500)
    occupancy = models.IntegerField(null=False, blank=False)
    check_in = models.TimeField(null=False, blank=False)
    check_out = models.TimeField(null=False, blank=False)


def name_file(instance, filename):
    return '/'.join([str(instance.owner.id), filename])


class VenueImage(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=False)
    image = ImageField(upload_to=name_file, blank=False, null=False)


class Booking(models.Model):
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE, null=False, blank=False)
    guest = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=False)
    start = models.DateField(null=False, blank=False)  # YYYY-MM-DD
    end = models.DateField(null=False, blank=False)

    def save(self, *args, **kwargs):
        if self.start:
            if not self.start > timezone.now().date():
                raise ValidationError("start must be greater than current time")
        if self.end:
            if not self.end > self.start:
                raise ValidationError("end time must be greater than start time")
        super().save(*args, **kwargs)
