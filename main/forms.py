from django.forms import ModelForm

from .models import *


class UserForm(ModelForm):
    class Meta:
        model = User
        fields = "__all__"


class VenueForm(ModelForm):
    class Meta:
        model = Venue
        exclude = ['owner', 'no_pictures']  # just for hackathon purposes


class VenueImageForm(ModelForm):
    class Meta:
        model = VenueImage
        fields = "__all__"


class BookingForm(ModelForm):
    class Meta:
        model = Booking
        fields = "__all__"

