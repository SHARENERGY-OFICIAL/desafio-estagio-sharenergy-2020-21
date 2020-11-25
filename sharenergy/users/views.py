from django.shortcuts import render
from web.models import Cliente, Participacao
from django.shortcuts import render, get_object_or_404, get_list_or_404
from web.utils import get_energia_gerada, get_rendimento
import os
from sharenergy.settings import BASE_DIR

CLIENTES_JSON = os.path.join(BASE_DIR,'users','dadosClientes.json')
""" USINAS_JSON = os.path.join(BASE_DIR,'users','dadosUsina.json') """
import os
USINAS_JSON = os.path.join(os.path.dirname(__file__), 'dadosUsina.json')
#a = os.getcwd()

# Create your views here.
def list_clientes(request):
    clientes = get_list_or_404(Cliente)
    return render(request, 'users/list_clientes.html', {'clientes':clientes})

def show_cliente(request, id):
    pt = get_object_or_404(Participacao, cliente=id)
    cliente = get_object_or_404(Cliente, numero_cliente=id)
    usinas = cliente.usinas.all()
    rendimento_cliente = get_rendimento(get_energia_gerada(USINAS_JSON), pt.porcentagem)
    user = {
        'nome': cliente.nome_cliente.capitalize(),
        'id': cliente.numero_cliente,
        'usinas': usinas[0],
        'porcentagem': pt.porcentagem,
        'rendimento': rendimento_cliente
    }
    return render(request, 'users/show_cliente.html', user)
