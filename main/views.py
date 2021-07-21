from typing import List, Dict

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


@api_view(['PATCH'])
def update_profile(request: Request, *args: List, **kwargs: Dict) -> JsonResponse:
    try:
        user = User.objects.filter(pk=kwargs['user']).get()
    except User.DoesNotExist:
        return JsonResponse(data=None, status=status.HTTP_404_NOT_FOUND, safe=False)

    serializer = UserSerializer(user, data=request.data, partial=True)
    if serializer.is_valid():
        if 'password' in serializer.validated_data:
            serializer.validated_data['password'] = hash(serializer.validated_data['password'])
        serializer.save()
        return JsonResponse(serializer.data, status=status.HTTP_202_ACCEPTED)
    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def make_post(request: Request) -> JsonResponse:
    serializer = VenueSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PATCH'])
def update_venue(request: Request, *args: List, **kwargs: Dict) -> JsonResponse:
    try:
        venue = Venue.objects.filter(pk=kwargs['venue']).get()
    except User.DoesNotExist:
        return JsonResponse(data=None, status=status.HTTP_404_NOT_FOUND, safe=False)

    serializer = VenueSerializer(venue, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data, status=status.HTTP_202_ACCEPTED)
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
    except User.DoesNotExist:
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
        queryset = Booking.objects.filter(guest_id=guest, active=True)
    else:
        queryset = Booking.objects.filter(venue_id=venue, active=True)

    serializer = BookingSerializer(queryset, many=True)
    return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)


@api_view(['DELETE'])
def cancel_booking(request: Request, *args: List, **kwargs: Dict) -> JsonResponse:
    try:
        booking = Booking.objects.filter(pk=kwargs['booking']).get()
    except Booking.DoesNotExist:
        return JsonResponse(data=None, status=status.HTTP_404_NOT_FOUND, safe=False)

    booking.active = False
    booking.save()
    return JsonResponse(data=None, status=status.HTTP_204_NO_CONTENT, safe=False)


@api_view(['GET'])
def search(request: Request) -> JsonResponse:
    print(request.query_params)

    occupancy = request.query_params.get("occupancy")
    location = request.query_params.get("location")

    if not (occupancy or location):
        return JsonResponse(data=None, status=status.HTTP_400_BAD_REQUEST, safe=False)

    if not location:
        location = ""

    if not occupancy:
        occupancy = 0

    queryset = Venue.objects.filter(location__icontains=location, occupancy__gte=occupancy)
    serializer = VenueSerializer(queryset, many=True)
    return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)
