from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Usina(models.Model):

    numero_usina = models.IntegerField(primary_key=True)
    nome = models.CharField(max_length=128)

    def __str__(self):
        return self.nome

class Cliente(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    numero_cliente = models.IntegerField(primary_key=True)
    nome_cliente = models.CharField(max_length=128)
    # related_name deveria ser 'clientes'
    usinas = models.ManyToManyField(Usina, through='Participacao',related_name='usinas')

    def __str__(self):
        return self.nome_cliente

class Participacao(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    usina = models.ForeignKey(Usina, on_delete=models.CASCADE)
    porcentagem = models.IntegerField()

    def __str__(self):
        return f'{self.cliente}.{self.usina}.{self.porcentagem}'