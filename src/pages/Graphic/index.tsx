import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Chart } from 'react-google-charts';
import Paginator from 'react-hooks-paginator';
import { AiOutlineUser } from 'react-icons/ai';

import Header from '../../components/Header';
import api from '../../services/api';

import { Container, Graphics } from './styles';

interface IHours {
  id: string;
  tempo_h: string;
  tensao_V: string;
  corrente_A: string;
  potencia_kW: string;
  temperatura_C: string;
}

const Graphic: React.FC = () => {
  const pageLimit = 5;

  const [datas, setData] = useState<IHours[]>([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [currentData, setCurrentData] = useState<IHours[]>([]);

  useEffect(() => {
    async function loadHours(): Promise<void> {
      const response = await api.get<IHours[]>('/hours');

      setData(response.data);
    }

    loadHours();
  }, []);

  useEffect(() => {
    setCurrentData(datas.slice(offset, offset + pageLimit));
  }, [offset, datas]);

  return (
    <>
      <Header>
        <Link to="/dashboard">
          <div>
            <button type="button">
              <div className="text">Cliente</div>
              <div className="icon">
                <AiOutlineUser size={24} />
              </div>
            </button>
          </div>
        </Link>
      </Header>
      <Container>
        <Graphics>
          <div>
            {currentData.map(data => (
              <Chart
                key={data.id}
                width="650px"
                height="460px"
                chartType="Bar"
                data={[
                  ['', 'Tensão', 'Corrente', 'Potência', 'Temperatura'],
                  [
                    `Horário ${data.tempo_h}`,
                    data.tensao_V,
                    data.corrente_A,
                    data.potencia_kW,
                    data.temperatura_C,
                  ],
                ]}
              />
            ))}
          </div>
        </Graphics>
        <Paginator
          totalRecords={datas.length}
          pageLimit={5}
          pageNeighbours={1}
          setOffset={setOffset}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Container>
    </>
  );
};

export default Graphic;
