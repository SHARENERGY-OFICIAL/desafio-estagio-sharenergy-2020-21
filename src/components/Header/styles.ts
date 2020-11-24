import styled from 'styled-components';

export const Container = styled.div`
  background: #f0f0f5;
  padding: 30px 0;

  header {
    width: 1280px;
    margin: 0 auto;
    padding: 0 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 400px;
    }

    nav {
      div {
        button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #39b100;
          color: #fff;
          width: 160px;
          height: 56px;

          display: flex;
          flex-direction: row;
          align-items: center;
          text-align: center;

          .text {
            padding: 16px 24px;
          }

          .icon {
            display: flex;
            padding: 16px 16px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
          }
        }
      }
      a {
        margin-top: 10px;
        flex-direction: row;
        display: flex;
        background: #39b100;
        text-decoration: none;
        border-radius: 8px;

        .text {
          padding: 16px 24px;
          color: #fff;
          font-weight: 600;
        }
      }
    }
  }
`;
