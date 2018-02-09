
from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
import json

from slides import create_new_deck, new_push

# Create your views here.
class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'index.html', context=None)

@csrf_exempt
def create_slide(request):
    data = json.loads(request.body);
    result = create_new_deck(data)

    return JsonResponse(result)

def new_push(request):
    data = json.loads(request);
    result = new_push(data)
    return JsonResponse(data)
