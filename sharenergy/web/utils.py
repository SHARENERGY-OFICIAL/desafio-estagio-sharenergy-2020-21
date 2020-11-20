import json

def format_time(time):
    hora, minutos = time.split(".")

def get_dict_from_json(filename):
    """
    Lê um arquivo Json e o transforma para um dicionario Python
    """  
    with open(filename) as f:
        file_dict = json.load(f)
        return file_dict

def get_Y_axes_from_dict(filename, variavel):
    """
    Cria uma lista a partir de um dicionario python
    """
    usinas = get_dict_from_json()
    grandeza = []
    for usina in usinas:
        grandeza.append(usina[variavel])
    return grandeza

def get_X_axes_from_Y(y_axes):
    """
    Cria um lista para o eixo X de acordo com a quantidade de itens do eixo Y
    """
    return list(range(1, len(y_axes)+1))