import React, { useEffect, useState } from "react";
import { VictoryChart, VictoryBar, VictoryAxis } from "victory";

import MoneyUp from "../../assets/MoneyUp.svg";
import arrowUp from "../../assets/arrowUp.svg";

import {
    DashboardContainer,
    Row,
    GraphContainer,
    MoneyContainer,
    HistoryContainer,
    Img,
    MoneyText,
    HistoryText,
    Hr,
    Percentage,
    PercentageIncrease,
    Icon,
    InformationText,
    Value,
    ButtonInterest,
    ButtonGroup
} from "./Dashboard";

const Dashboard = ({ usuario, usina }) => {


    const [data, setData] = useState([])
    const [interestValue, setInterestValue] = useState('corrente')
    
    const [dE, setDE] = useState(0);
    const [percentualUsina, setPercentualUsina] = useState(0);
    const [nomeUsina, setNomeUsina] = useState("");

    const getFormat = (interestValue) => {
        switch (interestValue) {
            case 'corrente':
                return 'A'
            case 'tensao':
                return 'V'
            case 'potencia':
                return 'kW'
            case 'temperatura':
                return 'C'
            default:
                return ''
        }
    }

    const getDadosUsina = async () => {
        let u = await require("../../api/infoUsina.json");
        u = u.filter((_u) => _u.numeroUsina === usina)[0];

        setNomeUsina(u.nome);
        setPercentualUsina(
        usuario.usinas.filter((usu) => usu.numeroUsina === usina)[0]
            .percentualUsina
        );

        const json = require("../../api/dadosUsina.json");

        let graphValues = []

        for (let obj of json) {
            const index = Math.floor(obj.tempo_h)
            if(!graphValues[`${index}`]) graphValues[`${index}`] = {}
            graphValues[`${index}`] = {
                tempo: index,
                tensao: graphValues[`${index}`].tensao ? graphValues[`${index}`].tensao + obj.tensao_V : obj.tensao_V,
                corrente: graphValues[`${index}`].corrente ? graphValues[`${index}`].corrente + obj.corrente_A : obj.corrente_A,
                potencia: graphValues[`${index}`].potencia ? graphValues[`${index}`].potencia + obj.potencia_kW : obj.potencia_kW,
                temperatura: graphValues[`${index}`].temperatura ? graphValues[`${index}`].temperatura + obj.temperatura_C : obj.temperatura_C,
            }
        }
        
        graphValues = graphValues.filter(pos => pos)
        setData(graphValues)

        const dT = json[1].tempo_h - json[0].tempo_h;
        const dE = dT * json.map((m) => m.potencia_kW).reduce((a, b) => a + b, 0);
        setDE(dE);
    };

    useEffect(() => {
        getDadosUsina();
    }, []);

  return (
    <DashboardContainer>
      <Row>
        <GraphContainer>
            <ButtonGroup>
                <ButtonInterest selected={interestValue === 'temperatura'} onClick={() => setInterestValue('temperatura')}>Temperatura</ButtonInterest>
                <ButtonInterest selected={interestValue === 'corrente'} onClick={() => setInterestValue('corrente')}>Corrente</ButtonInterest>
                <ButtonInterest selected={interestValue === 'tensao'} onClick={() => setInterestValue('tensao')}>Tensão</ButtonInterest>
                <ButtonInterest selected={interestValue === 'potencia'} onClick={() => setInterestValue('potencia')}>Potência</ButtonInterest>
            </ButtonGroup>
          <VictoryChart domainPadding={{ x: 10 }} animate={{ duration: 500 }}>
            <VictoryAxis 
                tickValues={data.map(d => d.tempo)}
                tickFormat={data.map(d => `${d.tempo}h`)}
            />
            <VictoryAxis 
                dependentAxis
                tickFormat={(x) => `${x}${getFormat(interestValue)}`}
            />
            <VictoryBar
              data={data}
              style={{
                data: { fill: "tomato", width: 12 },
              }}
              x="tempo"
              y={interestValue}
              animate={{
                onExit: {
                  duration: 500,
                  before: () => ({
                    _y: 0,
                    fill: "orange",
                  })
                }
              }}
            />
          </VictoryChart>
        </GraphContainer>
        <div>
          <MoneyContainer>
            <Img src={MoneyUp}></Img>
            <MoneyText>
                R$ {(dE * 0.95).toFixed(2)}     
            </MoneyText>
          </MoneyContainer>
          <HistoryContainer>
            <HistoryText>
              Histórico:
              <Hr />
              <Row>
                <Percentage>58%</Percentage>
                <PercentageIncrease>
                  <Row>
                    <Icon src={arrowUp}></Icon>
                    <div>13%</div>
                  </Row>
                </PercentageIncrease>
              </Row>
              <InformationText>
                <Row col={true}>
                  <div>Energia elétrica total produzida:</div>
                  <Value>{dE.toFixed(2)}kWh</Value>
                </Row>

                <Hr margin_top={"15px"} />

                <Row col={true} margin_top={"15px"}>
                  <div>Porcentagem da usina:</div>
                  <Value>{percentualUsina}%</Value>
                </Row>

                <Hr margin_top={"15px"} />

                <Row col={true} margin_top={"15px"}>
                  <div>Nome usina:</div>
                  <Value>{nomeUsina}</Value>
                </Row>
              </InformationText>
            </HistoryText>
          </HistoryContainer>
        </div>
      </Row>
    </DashboardContainer>
  );
};

export default Dashboard;
