import React, { useState, useEffect } from 'react';

import { FiPlusSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { AiFillSignal } from 'react-icons/ai';

import Header from '../../components/Header';

import api from '../../services/api';

import Client from '../../components/Client';
import ModalAddClient from '../../components/ModalAddClient';
import ModalEditClient from '../../components/ModalEditClient';

import { ClientContainer } from './styles';

interface IClient {
  id: number;
  name: string;
  image: string;
  available: boolean;
  address: string;
  telephone: string;
  numeroUsina: string;
  percentualUsina: number;
}

const Dashboard: React.FC = () => {
  const [customers, setCustomers] = useState<IClient[]>([]);
  const [editingClient, setEditingClient] = useState<IClient>({} as IClient);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function loadClient(): Promise<void> {
      const response = await api.get('/client');

      setCustomers(response.data);
    }

    loadClient();
  }, []);

  async function handleAddClient(
    client: Omit<IClient, 'id' | 'available'>,
  ): Promise<void> {
    try {
      const response = await api.post('/client', {
        ...client,
        available: true,
      });

      setCustomers([...customers, response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateClient(
    client: Omit<IClient, 'id' | 'available'>,
  ): Promise<void> {
    try {
      const response = await api.put(`/client/${editingClient.id}`, {
        ...editingClient,
        ...client,
      });

      setCustomers(
        customers.map(mappedClient =>
          mappedClient.id === editingClient.id
            ? { ...response.data }
            : mappedClient,
        ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteClient(id: number): Promise<void> {
    try {
      await api.delete(`/client/${id}`);

      setCustomers(customers.filter(client => client.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditClient(client: IClient): void {
    setEditingClient(client);
    toggleEditModal();
  }

  return (
    <>
      <Header>
        <div>
          <button type="button" onClick={toggleModal}>
            <div className="text">Novo Cliente</div>
            <div className="icon">
              <FiPlusSquare size={24} />
            </div>
          </button>
        </div>
        <Link to="/graphic">
          <div>
            <button type="button">
              <div className="text">Gráfico</div>
              <div className="icon">
                <AiFillSignal size={24} />
              </div>
            </button>
          </div>
        </Link>
      </Header>
      <ModalAddClient
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddClient={handleAddClient}
      />
      <ModalEditClient
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingClient={editingClient}
        handleUpdateClient={handleUpdateClient}
      />

      <ClientContainer data-testid="client-list">
        {customers &&
          customers.map(client => (
            <Client
              key={client.id}
              client={client}
              handleDelete={handleDeleteClient}
              handleEditClient={handleEditClient}
            />
          ))}
      </ClientContainer>
    </>
  );
};

export default Dashboard;
