from django.shortcuts import render
from django.http import HttpResponse
import matplotlib.pyplot as plt
import io
import urllib, base64
from web.utils import *
from sharenergy.settings import BASE_DIR
import os
# Create your views here.

CLIENTES_JSON = os.path.join(BASE_DIR,'web','dadosClientes.json')
USINAS_JSON = os.path.join(BASE_DIR,'web','dadosUsina.json')

a = get_XY_from_dict(USINAS_JSON, 'potencia_kW')
def grafico(request):
    plt.switch_backend('agg')
    variavel = request.GET.get('variavel','potencia_kW')
    grandeza_y_axe, horario_x_axe = get_XY_from_dict(USINAS_JSON, variavel)
    plt.plot(horario_x_axe, grandeza_y_axe)
    plt.xlabel("Horário")
    """ plt.grid() """
    plt.ylabel(format_var(variavel))
    plt.title(f'{format_var(variavel)} em função do tempo')
    plt.xticks(rotation="vertical")
    fig = plt.gcf()
    buf = io.BytesIO()
    fig.set_size_inches(10, 4.8)
    fig.savefig(buf, format='png')
    buf.seek(0)
    string = base64.b64encode(buf.read())
    uri = urllib.parse.quote(string)
    return render(request, 'web/grafico.html', {'data': uri, 'variavel': format_var(variavel)})
