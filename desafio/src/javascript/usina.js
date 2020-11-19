function mudarGrafico() {
  var tensao = document.getElementById('tensao');
  var corrente = document.getElementById('corrente');
  var potencia = document.getElementById('potencia');
  var temperatura = document.getElementById('temperatura');
  var grafico = document.getElementById('grafico');

  if(tensao.checked==true){
    grafico.src="../imagens/tensao_tempo.PNG"
    document.getElementById('grafico').innerHTML = "<img src = ../imagens/tensao_tempo.PNG>"
  }
  else if(corrente.checked==true){
    grafico.src="../imagens/corrente_tempo.PNG"
    document.getElementById('grafico').innerHTML = "<img src = ../imagens/corrente_tempo.PNG>"
  }  
  else if(potencia.checked==true){
    grafico.src="../imagens/potencia_tempo.PNG"
    document.getElementById('grafico').innerHTML = "<img src = ../imagens/potencia_tempo.PNG>"
  }  
  else if(temperatura.checked==true){
    grafico.src="../imagens/temperatura_tempo.PNG"
    document.getElementById('grafico').innerHTML = "<img src = ../imagens/temperatura_tempo.PNG>"
  }  
}
