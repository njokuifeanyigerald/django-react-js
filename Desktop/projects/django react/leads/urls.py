from django.urls import path, include
from rest_framework import routers
from .views import LeadView, poll

router = routers.DefaultRouter()
router.register('api/leads', LeadView, 'leads')


urlpatterns = [
    path('', include(router.urls)),
    # path('api/leads', poll)
    
]

#  OR

# urlpatterns = router.urls
