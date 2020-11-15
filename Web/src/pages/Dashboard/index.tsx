import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import GroupIcon from "@material-ui/icons/Group";
import Tooltip from "@material-ui/core/Tooltip";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory";

import { useHistory } from "react-router-dom";

import api from "../../services/api";

import IDadoUsina from "../../interfaces/IDadoUsina";

import { PageContainer, ButtonText } from "./styles";

const Dashboard: React.FC = () => {
  const [selectedInterest, setSelectedInterest] = useState("tensao_V");
  const [producedEnergyPrice, setProducedEnergyPrice] = useState<number>(0);
  const [dadosUsina, setDadosUsina] = useState<IDadoUsina[]>([]);

  const history = useHistory();

  useEffect(() => {
    async function loadData() {
      const response = await api.get<IDadoUsina[]>("/usina");

      setDadosUsina(response.data);

      const timeInterval = response.data[1].tempo_h - response.data[0].tempo_h;
      var kWTotal = 0;
      response.data.forEach((dado: IDadoUsina) => {
        kWTotal += dado.potencia_kW;
      });

      const totalEnergy = timeInterval * kWTotal;

      setProducedEnergyPrice(totalEnergy * 0.95);
    }
    loadData();
  }, []);

  return (
    <PageContainer>
      <AppBar color="primary">
        <Toolbar>
          <img
            src="https://sharenergy.com.br/wp-content/uploads/2018/08/logo-Sharenergy-01.png"
            alt="SHARENERGY"
            className="HeaderLogo"
          />
          <Tooltip title="Ir para Clientes" aria-label="ir para clientes">
            <Button
              onClick={() => history.push("clientes", producedEnergyPrice)}
              color="inherit"
              aria-label="clientes"
            >
              <ButtonText>Clientes</ButtonText>
              <GroupIcon />
            </Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Typography className="Title" variant="h4">
        Grafico de dados da Usina
      </Typography>
      <Container className="Container">
        <FormControl className="FormContainer" component="fieldset">
          <FormLabel className="FormLabel" component="legend">
            Variável de interesse
          </FormLabel>
          <RadioGroup
            onChange={(e) => setSelectedInterest(e.target.value)}
            value={selectedInterest}
          >
            <FormControlLabel
              value="tensao_V"
              control={<Radio />}
              label="Tensão elétrica em volts"
            />
            <FormControlLabel
              value="corrente_A"
              control={<Radio />}
              label="Corrente elétrica em amperes"
            />
            <FormControlLabel
              value="potencia_kW"
              control={<Radio />}
              label="Potência gerada em kilowatts"
            />
            <FormControlLabel
              value="temperatura_C"
              control={<Radio />}
              label="Temperatura em graus Celsius"
            />
          </RadioGroup>
        </FormControl>
        <Paper elevation={4}>
          <VictoryChart width={800} height={300} theme={VictoryTheme.material}>
            <VictoryLine
              style={{
                data: { stroke: "#00a2a2" },
                parent: { border: "1px solid #eee" },
              }}
              data={dadosUsina}
              x="tempo_h"
              y={selectedInterest}
            />
          </VictoryChart>
        </Paper>
      </Container>
    </PageContainer>
  );
};

export default Dashboard;
