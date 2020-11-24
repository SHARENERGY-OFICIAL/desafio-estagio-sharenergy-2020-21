import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

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

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateClient: (client: Omit<IClient, 'id' | 'available'>) => void;
  editingClient: IClient;
}

interface IEditClientData {
  id: number;
  name: string;
  image: string;
  available: boolean;
  address: string;
  telephone: string;
  numeroUsina: string;
  percentualUsina: number;
}

const ModalEditClient: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingClient,
  handleUpdateClient,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IEditClientData) => {
      handleUpdateClient(data);

      setIsOpen();
    },
    [handleUpdateClient, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingClient}>
        <h1>Editar Cliente</h1>
        <Input name="image" placeholder="Cole o link aqui" />
        <Input name="name" placeholder="Ex: Maria" />
        <Input name="address" placeholder="Endereço" />
        <Input name="telephone" placeholder="Telefone" />
        <Input name="numeroUsina" placeholder="Numero da usina" />
        <Input name="percentualUsina" placeholder="percentual Ex: 19" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Cliente</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditClient;
