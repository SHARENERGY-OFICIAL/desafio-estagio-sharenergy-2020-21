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
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import { useHistory, useLocation } from "react-router-dom";

import api from "../../services/api";

import { PageContainer, ButtonText } from "./styles";

import IDadoCliente, { Usina } from "../../interfaces/IDadoCliente";

const Clientes: React.FC = () => {
  const history = useHistory();
  const { state: producedEnergyPrice } = useLocation<number>();

  const [clientsData, setClientsData] = useState<IDadoCliente[]>([]);
  const [selectedClient, setSelectedClient] = useState<number>();
  const [clientName, setClientName] = useState<string>();
  const [clientCompanys, setClientCompanys] = useState<Usina[]>([]);
  const [openToast, setOpenToast] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  useEffect(() => {
    async function loadData() {
      const response = await api.get("/clientes");

      setClientsData(response.data);
    }
    loadData();
  }, []);

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
      setOpenSideMenu(false);
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

  async function handleSubmit() {
    var newClientsData = clientsData;

    if (!selectedClient || !clientName) {
      return;
    }

    var updatedClient;

    newClientsData.forEach((client) => {
      if (client.numeroCliente === selectedClient) {
        client.nomeCliente = clientName;
        client.usinas = clientCompanys;
        updatedClient = client;
      }
    });

    setClientsData([...newClientsData]);
    await api.put("/clientes", updatedClient);
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

  function handleCloseSideMenu() {
    setOpenSideMenu(false);
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
        {openSideMenu ? (
          <SwipeableDrawer
            anchor="left"
            onOpen={() => setOpenSideMenu(true)}
            open={openSideMenu}
            onClose={handleCloseSideMenu}
            PaperProps={{
              style: {
                width: 250,
                backgroundColor: "#222",
                color: "#eee",
                overflowX: "hidden",
                overflowY: "auto",
                marginTop: 56,
                paddingTop: 5,
              },
            }}
            ModalProps={{
              style: {
                zIndex: 1099,
              },
            }}
          >
            <Box className="SideBar">
              {clientsData.map((data) => (
                <div key={data.numeroCliente}>
                  <ListItem
                    style={
                      selectedClient === data.numeroCliente
                        ? {
                            borderBottomWidth: 2,
                            borderBottomColor: "rgba(0, 162, 162, 1)",
                            borderBottomStyle: "solid",
                            borderTopWidth: 2,
                            borderTopColor: "transparent",
                            borderTopStyle: "solid",
                            backgroundColor: "rgba(0, 162, 162, 0.05)",
                          }
                        : {
                            borderBottomWidth: 2,
                            borderBottomColor: "transparent",
                            borderBottomStyle: "solid",
                            borderTopWidth: 2,
                            borderTopColor: "transparent",
                            borderTopStyle: "solid",
                          }
                    }
                    onClick={() => handleSelection(data)}
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
          </SwipeableDrawer>
        ) : (
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
        )}
        <Divider className="Divider" orientation="vertical" />
        {!selectedClient ? (
          <Box className="SelectionPlaceholder">
            <Tooltip
              title="Abrir menu de clientes"
              aria-label="abrir menu de clientes"
            >
              <IconButton
                onClick={() => setOpenSideMenu(true)}
                className="MenuButtonOnPlaceholder"
                color="inherit"
              >
                <MenuIcon htmlColor="#eee" />
              </IconButton>
            </Tooltip>
            <Box className="SelectionPlaceholderText">
              <Typography variant="h3">Selecione um Cliente</Typography>
            </Box>
          </Box>
        ) : (
          <Box className="MainBox">
            <Box className="NameContainer">
              <Box className="TopBarContainer">
                <Tooltip
                  title="Abrir menu de clientes"
                  aria-label="abrir menu de clientes"
                >
                  <IconButton
                    onClick={() => setOpenSideMenu(true)}
                    className="MenuButton"
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                </Tooltip>
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
            <Box className="CompanyListContainer">
              <GridList
                cellHeight="auto"
                cols={
                  windowDimensions.width < 550
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
          </Box>
        )}
      </Paper>
    </PageContainer>
  );
};

export default Clientes;
