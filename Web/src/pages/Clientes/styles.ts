import styled from "styled-components";

export const PageContainer = styled.div`
  .MuiAppBar-colorPrimary {
    background-color: #222;
  }

  .MuiToolbar-gutters {
    justify-content: space-between;
  }

  .HeaderLogo {
    height: 50px;
  }

  .Container {
    display: flex;
    max-width: 1100px;
    height: 750px;

    margin-top: 90px;
    margin-left: auto;
    margin-right: auto;
    background-color: #222;

    .MuiDivider-root {
      background-color: rgba(255, 255, 255, 0.05);
    }

    @media only screen and (max-height: 870px) {
      height: 650px;
    }

    @media only screen and (max-height: 760px) {
      height: 530px;
    }

    @media only screen and (max-height: 650px) {
      height: 500px;
    }

    @media only screen and (max-width: 530px) {
      height: calc(100vh - 50px);
      margin-top: 56px;
    }
  }

  .SideBar {
    overflow-y: auto;
    overflow-x: hidden;
    max-width: 250px;

    @media only screen and (max-width: 725px) {
      display: none;
    }

    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: rgba(255, 255, 255, 0.02);
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }

  .MuiListItem-button:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  .ClientItem {
    padding-right: 20px;
    color: #eee;
    min-width: 200px;
    border-bottom: 2px solid transparent;
    border-top: 2px solid transparent;

    .MuiListItemIcon-root {
      min-width: 35px;
    }
  }

  .ClientItemSelected {
    padding-right: 20px;
    color: #eee;
    min-width: 200px;

    border-bottom: 2px solid rgba(0, 162, 162, 1);
    border-top: 2px solid transparent;
    background-color: rgba(0, 162, 162, 0.05);

    .MuiListItemIcon-root {
      min-width: 35px;
    }
  }

  .SelectionPlaceholder {
    color: rgba(255, 255, 255, 0.1);
    display: flex;
    flex: 1;
    flex-direction: column;

    .MenuButtonOnPlaceholder {
      margin-top: 20px;
      margin-left: 20px;
      width: 48px;
      height: 48px;
      display: none;
    }

    .SelectionPlaceholderText {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media only screen and (max-width: 530px) {
      .MuiTypography-h3 {
        font-size: 30px;
      }
    }

    @media only screen and (max-width: 725px) {
      .MenuButtonOnPlaceholder {
        display: inline-flex;
      }

      .SelectionPlaceholderText {
        margin-bottom: 104px;
      }
    }
  }

  .MainBox {
    display: flex;
    flex: 1;
    align-items: initial;
    justify-content: center;
    flex-direction: column;
    padding: 20px;

    @media only screen and (max-width: 410px) {
      .Input {
        width: 250px;
      }
    }

    .NameContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding-bottom: 50px;
    }

    .MenuButton {
      color: #eee;
      display: none;

      @media only screen and (max-width: 725px) {
        display: inline-flex;
      }
    }

    .SaveButton {
      background-color: rgba(0, 162, 162, 1);

      @media only screen and (max-width: 530px) {
        width: 60px;
        height: 30px;
        font-size: 14px;
      }
    }

    .TopBarContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .InputLabel {
      font-size: 20px;
      color: rgba(255, 255, 255, 0.5);
      margin-right: calc(50% - 105px);
      margin-left: auto;

      @media only screen and (max-width: 530px) {
        margin-right: calc(50% - 84px);
      }
    }

    .Input {
      margin-top: 10px;
      background-color: transparent;
      border-radius: 5px;
      border: 0;
      border-bottom: solid 2px transparent;
      padding-top: 5px;
      padding-bottom: 5px;
      color: #eee;
      font-weight: bold;
      font-size: 28px;
      text-align: center;
      transition: background-color 0.25s;
      background-color: rgb(42, 42, 42);
    }

    .Input:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }

    .Input:focus {
      border-bottom: solid 2px rgba(0, 162, 162, 1);
      background-color: rgba(0, 162, 162, 0.05);
    }

    .CompanysLable {
      font-size: 20px;
      color: rgba(255, 255, 255, 0.5);
      text-align: center;
      margin-top: 10px;
    }
  }

  .CompanyListContainer {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    overflow-y: auto;
    overflow-x: hidden;

    .MuiGridListTile-root {
      height: 180px !important;
    }

    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background-color: rgba(255, 255, 255, 0.02);
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }

  .CompanyCard {
    width: 160px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(42, 42, 42);
    margin-top: 15px;
    color: #eee;
    font-weight: bold;
    font-size: 18px;
  }

  .PercentageText {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  .CompanyPercentage {
    color: #eee;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    border: 0;
    border-bottom: solid 2px transparent;
    border-top: solid 2px transparent;
    border-radius: 5px;
    width: 36px;
    background-color: rgba(255, 255, 255, 0.05);
    transition: background-color 0.25s;
  }

  .CompanyPercentage:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .CompanyPercentage:focus {
    border-bottom: solid 2px rgba(0, 162, 162, 1);
    background-color: rgba(0, 162, 162, 0.05);
  }

  .CircularPercentage {
    color: rgba(0, 162, 162, 1);
  }

  .PercentageContainer {
    margin-bottom: 8px;
  }

  .Profit {
    font-size: 20px;
  }
`;

export const ButtonText = styled.p`
  margin-left: 6px;
`;
