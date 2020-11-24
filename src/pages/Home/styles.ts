import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: #f0f0f5;
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  header {
    margin: 48px 0 0;
  }

  img {
    width: 400px;
  }

  div {
    img {
      position: absolute;
      width: 676px;
      height: 521px;
      left: 1157px;
      top: 163px;
    }
  }
`;

export const Main = styled.div`
  flex: 1;
  max-width: 560px;

  display: flex;
  flex-direction: column;
  justify-content: center;


  h1 {
    font-size: 54px;
    color: #352560;
  }

  div {
        button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #39b100;
          color: #fff;
          width: 180px;
          height: 56px;




          display: flex;
          flex-direction: row;
          align-items: center;

          .icon {
            display: block;
            background: rgba(0, 0, 0, 0.08);
            width: 100px;
            height: 72px;


            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.2s;



          }
        }
      }
      a {
        width: 100%;
        margin-top: 40px;
        max-width: 360px;
        height: 72px;
        background: #39b100;
        border-radius: 8px;
        text-decoration: none;


        display: flex;
        align-items: center;
        overflow: hidden;


        .text {
          padding: 16px 24px;

          color: #FFF;
          font-weight: 900;


        }
      }
    }
  }


`;
