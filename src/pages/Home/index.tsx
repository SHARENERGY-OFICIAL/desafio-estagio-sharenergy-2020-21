import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Main, Content } from './styles';

import Logo from '../../assets/logo-Sharenergy-01.png';
import background from '../../assets/bg.png';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <header>
          <img src={Logo} alt="Sharenergy" />
        </header>

        <Main>
          <h1>Economize com a Energia Solar!</h1>

          <Link to="/dashboard">
            <div>
              <button type="button">
                <div className="icon">
                  <FiLogIn size={24} />
                </div>
                <div className="text">Acessar</div>
              </button>
            </div>
          </Link>
        </Main>
        <div>
          <img src={background} alt="sharenerg" />
        </div>
      </Content>
    </Container>
  );
};

export default Home;
