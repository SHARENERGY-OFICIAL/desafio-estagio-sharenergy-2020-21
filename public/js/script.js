let lineChart;

function converteHorario(arrayTempo) {
    
    // converte valor para horario
    for (let i = 0; i < arrayTempo.length; i++) {
        arrayTempo[i] = arrayTempo[i].toString();
        var antesVirgula = arrayTempo[i].substr(0, arrayTempo[i].indexOf('.'));
        var depoisVirgula = arrayTempo[i].substr(arrayTempo[i].indexOf('.') + 1);

        if (!antesVirgula) {
            antesVirgula = arrayTempo[i];
            depoisVirgula = "00";
        }

        depoisVirgula = depoisVirgula.substr(0, 2);
        if (depoisVirgula === "08") {
            depoisVirgula = "05";
        } else {
            depoisVirgula = Math.round(depoisVirgula * 60 / 100);
            depoisVirgula = depoisVirgula.toString();
            if (depoisVirgula.length < 2) {
                depoisVirgula = depoisVirgula + "0";
            }
            if (depoisVirgula.length < 1) {
                depoisVirgula = "00";
            }
        }
        var juntos = antesVirgula + 'h' + depoisVirgula + 'min';
        arrayTempo[i] = juntos;
    }
}


function renderChart(arrayTempo, selecionado, label) {


    // cria gráfico com chart.js
    let ctx = document.getElementById('myChart').getContext('2d');
    Chart.defaults.global.defaultFontColor = "rgba(255, 255, 255, 0.9)";


    lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: arrayTempo,
            datasets: [{
                label: label,
                data: selecionado,
                backgroundColor: [
                    'rgba(213, 222, 38, 0.6)'
                ],
                borderColor: [
                    'rgba(26, 161, 160, 1)'
                ],
                borderWidth: 2,
                 pointBorderColor: 'rgba(213, 222, 38, 1)'
            }]
        },
        options: {
            legend:{
                // align: 'start',
                labels:{
                    fontSize: 24
                }
            }
        }
    })
}


function selecionaVariavel(variavel) {

    //seleciona variavel a ser mostrada no gráfico
    variavel = variavel.textContent;

    if(variavel==='Tensão (v)'){
        selecionado = arrayTensao; 

    }else if(variavel ==='Corrente (A)'){
        selecionado = arrayCorrente;

    }else if(variavel ==='Potência (kW)'){
        selecionado = arrayPotencia;

    }else if(variavel ==='Temperatura (ºC)'){
        selecionado = arrayTemperatura;

    }
    
    lineChart.data.datasets[0].data = selecionado;
    lineChart.data.datasets[0].label = variavel;
    lineChart.update();
}


