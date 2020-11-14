import styled from "styled-components";

export const PageContainer = styled.div`
  .MuiAppBar-colorPrimary {
    background-color: #222;
  }

  .HeaderLogo {
    height: 50px;
    margin-right: 40px;
  }

  .Title {
    margin-top: 100px;
    text-align: center;
    color: #ddd;
  }

  .Container {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .FormContainer {
    width: 350px;
  }

  .FormLabel {
    margin-bottom: 8px;
    padding: 4px;
    border-radius: 4px;
  }

  .MuiFormLabel-root.Mui-focused,
  .MuiIconButton-colorSecondary:hover,
  .MuiRadio-colorSecondary.Mui-checked:hover {
    background-color: rgba(0, 162, 162, 0.04);
  }

  .MuiFormLabel-root,
  .MuiRadio-root {
    color: #aaa;
  }

  .MuiFormLabel-root.Mui-focused,
  .MuiRadio-colorSecondary.Mui-checked {
    color: #00a2a2;
  }

  .MuiPaper-root {
    background-color: #222;
  }

  @media only screen and (max-width: 950px) {
    .Container {
      flex-direction: column-reverse;
    }

    .FormContainer {
      margin-top: 20px;
    }

    .VictoryContainer {
      height: 500px;
    }
  }

  @media only screen and (max-width: 650px) {
    .MuiTypography-body1 {
      font-size: 15px;
    }

    .Title {
      font-size: 28px;
    }

    .Header {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .HeaderLogo {
      margin-right: 0;
    }
  }
`;
