import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { Container } from './styles';

import Logo from '../../assets/logo-Sharenergy-01.png';

const Header: React.FC = ({ children }) => (
  <Container>
    <header>
      <img src={Logo} alt="Sharenergy" />

      <nav>
        {children}

        <Link to="/">
          <div>
            <button type="button">
              <div className="text">Home Page</div>
              <div className="icon">
                <AiFillHome size={24} />
              </div>
            </button>
          </div>
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
