from .models import Lead
from .serializer import LeadSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

# @csrf_exempt
class LeadView(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    permission_classes = [
        IsAuthenticated
    ]
    def get_queryset(self):
        return self.request.user.leads.all()
    def perform_update(self,serializer):
        pass
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

@csrf_exempt  #it will allow the csrf token to auto pass
def poll(request):
    # pass
    if request.method == 'GET':
        queryset = Lead.objects.all()
        serializer = LeadSerializer(queryset, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser.parse(request.POST)
        serializer = LeadSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        else:
            return JsonResponse(serializer.errors, status=400)