from django.urls import path
from .views import *

urlpatterns = [
    path('list/', list_clientes, name='clientes_list'),
    path('cliente/<id>/', show_cliente, name='show_cliente')
]