from django.core.handlers.wsgi import WSGIRequest
from django.http import *
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.request import Request

from .forms import *
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


@require_http_methods(['POST'])
def upload_image(request: Request) -> JsonResponse:
    form = VenueImageForm(request.POST, auto_id='%s')
    if request.method == 'POST':
        if form.is_valid():
            form.save()
            return JsonResponse(data=None, status=status.HTTP_201_CREATED)
    return JsonResponse(data=None, status=status.HTTP_400_BAD_REQUEST)


def make_booking(request):
    pass
