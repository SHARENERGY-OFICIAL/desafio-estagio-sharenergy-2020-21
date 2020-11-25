from django.shortcuts import render
from web.models import Cliente, Participacao
from django.shortcuts import render, get_object_or_404, get_list_or_404

# Create your views here.
def list_clientes(request):
    clientes = get_list_or_404(Cliente)
    return render(request, 'users/list_clientes.html', {'clientes':clientes})

def show_cliente(request, id):
    pt = get_object_or_404(Participacao, cliente=id)
    cliente = get_object_or_404(Cliente, numero_cliente=id)
    usinas = cliente.usinas.all()
    user = {
        'nome': cliente.nome_cliente.capitalize(),
        'id': cliente.numero_cliente,
        'usinas': usinas[0],
        'porcentagem': pt.porcentagem
    }
    return render(request, 'users/show_cliente.html', user)
