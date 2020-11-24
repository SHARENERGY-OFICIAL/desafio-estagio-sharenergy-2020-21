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

interface ICreateClientData {
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
  handleAddClient: (client: Omit<IClient, 'id' | 'available'>) => void;
}

const ModalAddClient: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddClient,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateClientData) => {
      handleAddClient(data);

      setIsOpen();
    },
    [handleAddClient, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Cliente</h1>
        <Input name="image" placeholder="Cole o link aqui" />
        <Input name="name" placeholder="Ex: Maria" />
        <Input name="address" placeholder="Endereço" />
        <Input name="telephone" placeholder="Telefone" />
        <Input name="numeroUsina" placeholder="Numero da usina" />
        <Input name="percentualUsina" placeholder="percentual Ex: 19" />

        <button type="submit" data-testid="add-client-button">
          <p className="text">Adicionar Cliente</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddClient;
