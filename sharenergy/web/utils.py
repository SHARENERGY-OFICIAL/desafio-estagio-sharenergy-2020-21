import json

def format_time_str(time: str):
    'formata o horario e devolve em string'
    time = str(round(float(time), 2))
    hora, minutos = time.split(".")
    minutos = str((int(minutos) * 60)/100)
    if len(hora) < 2:
        hora += f'0{hora}'
    if len(minutos) < 2:
        minutos += f'{minutos}0'
    return f'{hora}:{minutos}'

def format_time_float(time: str):
    'converte os minutos de forma correta'

    # aredonda o numero. str > float > str
    time = str(round(float(time), 2))
    hora, minutos = time.split(".")
    # converte os minutos para a forma correta. str > int > float > str
    minutos = str(round((int(minutos) * 60)/100))
    return float(f'{hora}.{minutos}')

def format_var(variavel: str):
    grandezas = {
        'tempo_h': 'tempo',
        'tensao_V': 'tensão',
        'corrente_A': 'corrente',
        'potencia_kW': 'potência',
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
        #horarios.append(format_time_float(usina['tempo_h']))
        horarios.append(usina['tempo_h'])
    return grandeza, horarios

def get_energia_gerada(filename: str):
    """
    retorna a energia gerada total da usina
    """
    usinas = get_dict_from_json(filename)
    tempos = []
    potencias = []
    energia_gerada = []
    for usina in usinas:
        tempos.append(format_time_float(usina['tempo_h']))
        potencias.append(usina['potencia_kW'])
    for n in range(0, len(tempos)-1):
        energia_gerada.append((tempos[n+1]-tempos[n]) * potencias[n])
    return sum(energia_gerada)

def get_rendimento(energia, porcentagem):
    """
    retorna o rendimento da usina em reais de acordo com a porcentagem de participação do cliente
    """
    custo = 0.95
    receita = custo * energia
    rendimento = (porcentagem * receita)/100
    return round(rendimento, 2)