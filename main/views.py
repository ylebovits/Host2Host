from typing import List, Dict

from django.db.models import Model
from django.http import *
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.request import Request
from .serializers import *


@api_view(['POST'])
def register(request: Request) -> JsonResponse:
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        # security or something
        serializer.validated_data['password'] = hash(serializer.validated_data['password'])
        serializer.save()
        return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def make_post(request: Request) -> JsonResponse:
    serializer = VenueSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def upload_image(request: Request) -> JsonResponse:
    serializer = VenueImageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def retrieve_images(request: Request, *args: List, **kwargs: Dict) -> JsonResponse:
    # verify host exists as user
    try:
        User.objects.filter(pk=kwargs['user']).get()
    except Model.DoesNotExist:
        return JsonResponse(data=None, status=status.HTTP_404_NOT_FOUND, safe=False)

    queryset = VenueImage.objects.filter(owner_id=kwargs['user'])
    serializer = VenueImageSerializer(queryset, many=True)
    return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)


@api_view(['POST'])
def make_booking(request: Request) -> JsonResponse:
    serializer = BookingSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# retrieve bookings based on either the guest or the venue
@api_view(['GET'])
def retrieve_bookings(request: Request) -> JsonResponse:
    guest = request.query_params.get('guest_id')
    venue = request.query_params.get('venue_id')

    # if neither are provided or both are provided
    if not (guest or venue) or (guest and venue):
        return JsonResponse(data=None, status=status.HTTP_400_BAD_REQUEST, safe=False)

    if guest:
        queryset = Booking.objects.filter(guest_id=guest)
    else:
        queryset = Booking.objects.filter(venue_id=venue)

    serializer = BookingSerializer(queryset, many=True)
    return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)
