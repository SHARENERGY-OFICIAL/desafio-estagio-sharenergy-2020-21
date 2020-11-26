from django.urls import path
from .views import grafico

urlpatterns = [
    path('', grafico, name="grafico")
]
