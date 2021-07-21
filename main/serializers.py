from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'age', 'email', 'phone_number', 'password')


class VenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venue
        fields = ('owner', 'location', 'description', 'occupancy', 'check_in', 'check_out')

    def to_representation(self, instance):
        self.fields['owner'] = UserSerializer(read_only=True)
        return super(VenueSerializer, self).to_representation(instance)


class VenueImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = VenueImage
        fields = ('owner', 'image')


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
