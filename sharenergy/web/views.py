from django.shortcuts import render
from django.http import HttpResponse
import matplotlib.pyplot as plt
import io
import urllib, base64
from .utils import *
# Create your views here.

CLIENTES_JSON = 'dadosClientes.json'
USINAS_JSON = 'dadosUsina.json'

def grafico(request):
    variavel = request.GET.get('variavel','potencia_kW')
    grandeza_Yaxe = get_Y_axes_from_dict()
    plt.plot(range(10))
    fig = plt.gcf()
    buf = io.BytesIO()
    fig.savefig(buf, format='png')
    buf.seek(0)
    string = base64.b64encode(buf.read())
    uri = urllib.parse.quote(string)
    return render(request, 'web/grafico.html', {'data': uri})
