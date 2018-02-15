
from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
import json

from slides import create_new_deck, add_push

# Create your views here.
class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'index.html', context=None)

@csrf_exempt
def create_slide(request):
    result = {}
    data = json.loads(request.body);
    result['deck_id'] = create_new_deck(data)
    return JsonResponse(result)

@csrf_exempt
def new_push(request):
    result = {}
    data = json.loads(request.body)
    values = data['values']
    result['status'] = add_push(data)
    print result
    return JsonResponse(result)
