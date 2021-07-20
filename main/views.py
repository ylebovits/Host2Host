from django.http import HttpResponse, JsonResponse, HttpResponseBadRequest, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from .forms import *


@csrf_exempt
@require_http_methods(['POST'])
def register(request):
    form = UserForm(request.POST, auto_id='%s')
    if request.method == 'POST':
        if form.is_valid():
            user = form.save(commit=False)
            user.password = hash(user.password)
            user.save()
            return HttpResponse('Good data')
    return HttpResponse("Working")


""" just some stubs """


def make_post(request):
    pass


def make_booking(request):
    pass


def upload_image(request):
    pass
