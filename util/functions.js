const fs = require('fs');
const path = require('path');

const arquivoUsina = fs.readFileSync(
    path.join(__dirname, '..', 'dadosUsina.json')
)
const dadosUsina = JSON.parse(arquivoUsina);

let potenciaTotal = 0;

let arrayTempo = new Array();
let arrayTensao = new Array();
let arrayCorrente = new Array();
let arrayPotencia = new Array();
let arrayTemperatura = new Array();
for(usina of dadosUsina){
    arrayTempo.push(usina.tempo_h);
    arrayTensao.push(usina.tensao_V);
    arrayCorrente.push(usina.corrente_A);
    arrayPotencia.push(usina.potencia_kW);
    arrayTemperatura.push(usina.temperatura_C);
    potenciaTotal+= usina.potencia_kW;
}

const valorEnergia = 0.95;
let deltaTempo = dadosUsina[1].tempo_h - dadosUsina[0].tempo_h;
potenciaTotal = potenciaTotal.toFixed(2);
let potenciaHora = deltaTempo * potenciaTotal;
potenciaHora = potenciaHora.toFixed(2);
let receitaTotal = potenciaHora * valorEnergia;
receitaTotal = receitaTotal.toFixed(2);

module.exports = {
    tempo: arrayTempo,
    tensao: arrayTensao,
    corrente: arrayCorrente,
    potencia: arrayPotencia,
    temperatura: arrayTemperatura,
    receitaTotal: receitaTotal,
    potenciaTotal: potenciaTotal
};
