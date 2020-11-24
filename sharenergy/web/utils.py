import json

def format_time_str(time: str):
    time = str(round(float(time), 2))
    hora, minutos = time.split(".")
    minutos = str((int(minutos) * 60)/100)
    if len(hora) < 2:
        hora += f'0{hora}'
    if len(minutos) < 2:
        minutos += f'{minutos}0'
    return f'{hora}:{minutos}'

def format_time_float(time: str):
    time = str(round(float(time), 2))
    hora, minutos = time.split(".")
    minutos = str((int(minutos) * 60)/100)
    return float('{hora}.{minutos}')

def format_var(variavel: str):
    grandezas = {
        'tempo_h': 'tempo',
        'tensao_V': 'tensao',
        'corrente_A': 'corrente',
        'potencia_kW': 'potencia',
        'temperatura_C': 'temperatura'
    }
    return grandezas[variavel]

def get_dict_from_json(filename: str):
    """
    Lê um arquivo Json e o transforma para um dicionario Python
    """  
    with open(filename) as f:
        file_dict = json.load(f)
        return file_dict

def get_XY_from_dict(filename: str, variavel: str):
    """
    Cria uma lista a partir de um dicionario python
    """
    usinas = get_dict_from_json(filename)
    grandeza = []
    horarios = []
    for usina in usinas:
        grandeza.append(usina[variavel])
        horarios.append(format_time_float(usina['tempo_h']))
        """ horarios.append(usina['tempo_h']) """
    return grandeza, horarios
