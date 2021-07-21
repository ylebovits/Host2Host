from typing import List, Dict

from django.db.models import Model
from django.http import *
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.request import Request
from django.core import serializers as django_serializers
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


@api_view(['POST'])
def make_booking(request: Request) -> JsonResponse:
    serializer = BookingSerializer(data=request.data)
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
        return JsonResponse(data=None, status=status.HTTP_404_NOT_FOUND)

    queryset = VenueImage.objects.filter(owner_id=kwargs['user'])
    return JsonResponse(list(queryset.values()), status=status.HTTP_200_OK, safe=False)
