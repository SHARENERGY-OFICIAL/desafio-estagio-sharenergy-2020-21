import json
from matplotlib import pyplot as plt


def format_time(time):
    hora, minutos = time.split(".")

""" 
class Grafico:

    def __init__(self, variavel, xlabel, ylabel, filename, title):
        self.xlabel = xlabel
        self.ylabel = ylabel
        self.filename = filename
        self.variavel = variavel
        self.title = title

    def get_dict_from_jsons(self):
        """
        Lê um arquivo Json e o transforma para um dicionario Python
        """  
        with open(filename) as f:
            file_json = json.load(f)
            return file_json

    def get_Y_axes_from_dict(self):
        """
        Cria uma lista a partir de um dicionario python
        """
        usinas = self.get_dict_from_json()
        grandeza = []
        for usina in usinas:
            grandeza.append(usina[self.variavel])
        return grandeza

    def get_X_axes_from_Y(y_axes):
        """
        Cria um lista para o eixo X de acordo com a quantidade de itens do eixo Y
        """
        return list(range(1, len(y_axes)+1))

    variavel_y = get_Y_axes_from_dict()

    dia_x = get_X_axes_from_Y()

    plt.plot(dia_x, variavel_y)
    plt.xlabel('Dias')
    plt.ylabel(f'{grandeza')
    plt.title(f'{grandeza} por Dia')
    plt.grid()
    plt.show()' """