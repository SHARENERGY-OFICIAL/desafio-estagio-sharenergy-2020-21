import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Tooltip from "@material-ui/core/Tooltip";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";

import { useHistory, useLocation } from "react-router-dom";

import { PageContainer, ButtonText } from "./styles";

import IDadoCliente, { Usina } from "../../interfaces/IDadoCliente";
import dadosClientes from "../../data/dadosClientes.json";
import Snackbar from "@material-ui/core/Snackbar";

const Clientes: React.FC = () => {
  const history = useHistory();
  const { state: producedEnergyPrice } = useLocation<number>();

  const [clientsData, setClientsData] = useState<IDadoCliente[]>(dadosClientes);
  const [selectedClient, setSelectedClient] = useState<number>();
  const [clientName, setClientName] = useState<string>();
  const [clientCompanys, setClientCompanys] = useState<Usina[]>([]);
  const [openToast, setOpenToast] = useState(false);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleSelection(client: IDadoCliente) {
    if (client.numeroCliente !== selectedClient) {
      setSelectedClient(client.numeroCliente);
      setClientName(client.nomeCliente);
      setClientCompanys(client.usinas);
    }
  }

  function handlePorcentageChange(id: number, newPercentage: string) {
    const numberPercentage = Number(newPercentage);

    if (numberPercentage <= 100 && numberPercentage >= 0) {
      var newCompanys = clientCompanys;

      newCompanys.forEach((company) => {
        if (company.numeroUsina === id) {
          company.percentualUsina = Number(numberPercentage);
        }
      });

      setClientCompanys([...newCompanys]);
    }
  }

  function handleSubmit() {
    var newClientsData = clientsData;

    if (!selectedClient || !clientName) {
      return;
    }

    newClientsData.forEach((client) => {
      if (client.numeroCliente === selectedClient) {
        client.nomeCliente = clientName;
        client.usinas = clientCompanys;
      }
    });

    setClientsData([...newClientsData]);
    setOpenToast(true);
  }

  function handleCloseToast(
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) {
    if (reason === "clickaway") {
      return;
    }
    setOpenToast(false);
  }

  return (
    <PageContainer>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openToast}
        autoHideDuration={5000}
        onClose={handleCloseToast}
      >
        <Alert variant="filled" onClose={handleCloseToast} severity="success">
          Alterações salvas!
        </Alert>
      </Snackbar>
      <AppBar color="primary">
        <Toolbar>
          <img
            src="https://sharenergy.com.br/wp-content/uploads/2018/08/logo-Sharenergy-01.png"
            alt="SHARENERGY"
            className="HeaderLogo"
          />
          <Tooltip
            title="Voltar a pagina inicial"
            aria-label="voltar a pagina inicial"
          >
            <Button
              onClick={() => history.goBack()}
              color="inherit"
              aria-label="voltar"
            >
              <ArrowBackIcon />
              <ButtonText>Voltar</ButtonText>
            </Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Paper elevation={5} className="Container">
        <Box className="SideBar">
          {clientsData.map((data) => (
            <div key={data.numeroCliente}>
              <ListItem
                onClick={() => handleSelection(data)}
                className={
                  selectedClient === data.numeroCliente
                    ? "ClientItemSelected"
                    : "ClientItem"
                }
                button
              >
                <ListItemIcon>
                  <AccountCircleIcon htmlColor="#aaa" />
                </ListItemIcon>
                <ListItemText primary={data.nomeCliente} />
              </ListItem>
              <Divider />
            </div>
          ))}
        </Box>
        <Divider className="Divider" orientation="vertical" />
        {!selectedClient ? (
          <Box className="SelectionPlaceholder">
            <Typography variant="h3">Selecione um Cliente</Typography>
          </Box>
        ) : (
          <Box className="MainBox">
            <Box className="NameContainer">
              <Box className="TopBarContainer">
                <label className="InputLabel">Nome</label>
                <Tooltip
                  title="Salvar alterações"
                  aria-label="salvar alterações"
                >
                  <Button
                    className="SaveButton"
                    variant="contained"
                    onClick={() => handleSubmit()}
                  >
                    Salvar
                  </Button>
                </Tooltip>
              </Box>
              <input
                className="Input"
                value={clientName}
                onChange={(e) => setClientName(e.currentTarget.value)}
              />
            </Box>
            <Divider className="Divider" />
            <label className="CompanysLable">Usinas</label>
            <GridList
              cellHeight="auto"
              className="CompanyList"
              cols={
                windowDimensions.width < 750
                  ? 2
                  : windowDimensions.width < 925
                  ? 3
                  : 4
              }
            >
              {clientCompanys.map((data) => (
                <GridListTile key={data.numeroUsina}>
                  <Card variant="outlined" className="CompanyCard">
                    <Box
                      className="PercentageContainer"
                      position="relative"
                      display="inline-flex"
                    >
                      <CircularProgress
                        className="CircularPercentage"
                        variant="static"
                        color="inherit"
                        value={data.percentualUsina}
                        size={90}
                      />
                      <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box className="PercentageText">
                          <input
                            className="CompanyPercentage"
                            type="number"
                            max={100}
                            min={0}
                            value={data.percentualUsina}
                            onChange={(e) =>
                              handlePorcentageChange(
                                data.numeroUsina,
                                e.currentTarget.value
                              )
                            }
                          />
                          %
                        </Box>
                      </Box>
                    </Box>
                    <p className="Profit">
                      R$
                      {Number(
                        (
                          (data.percentualUsina / 100) *
                          producedEnergyPrice
                        ).toFixed(2)
                      ).toLocaleString("pt-BR")}
                    </p>
                  </Card>
                </GridListTile>
              ))}
            </GridList>
          </Box>
        )}
      </Paper>
    </PageContainer>
  );
};

export default Clientes;
