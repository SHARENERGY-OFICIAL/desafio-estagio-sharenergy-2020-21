import React, { Component } from "react";
import api from "../../services/api";
import { VictoryBar, VictoryChart } from "victory";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default class Grafico extends Component {
  state = {
    valor: "tensao_V",
    usina: [],
  };

  handleChange = (event) => {
    this.setState({ valor: event.target.value });
  };

  async componentDidMount() {
    const response = await api.get();
    this.setState({ usina: response.data });
    console.log(response.data);
  }

  render() {
    const { usina } = this.state;
    const { valor } = this.state;
    return (
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Opções</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={this.state.valor}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="tensao_V"
              control={<Radio />}
              label="Tensão"
            />
            <FormControlLabel
              value="corrente_A"
              control={<Radio />}
              label="Corrente"
            />
            <FormControlLabel
              value="potencia_kW"
              control={<Radio />}
              label="Potência"
            />
            <FormControlLabel
              value="temperatura_C"
              control={<Radio />}
              label="Temperatura"
            />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            />
          </RadioGroup>
        </FormControl>
        <div>
          <VictoryChart>
            <VictoryBar data={usina} x={valor} y="tempo_h" />
          </VictoryChart>
        </div>
      </div>
    );
  }
}
