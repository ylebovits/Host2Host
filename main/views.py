from django.http import *
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from rest_framework import status
from rest_framework.decorators import api_view

from .forms import *
from .serializers import *


@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        # security or something
        serializer.validated_data['password'] = hash(serializer.validated_data['password'])
        serializer.save()
        return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def make_post(request):
    serializer = VenueSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@require_http_methods(['POST'])
def upload_image(request):
    form = VenueImageForm(request.POST, auto_id='%s')
    if request.method == 'POST':
        if form.is_valid():
            form.save()
            return HttpResponse('', status=201)
    return HttpResponseBadRequest()


def make_booking(request):
    pass
