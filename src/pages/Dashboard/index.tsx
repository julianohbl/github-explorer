import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no GitHub</Title>

    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/15468735?v=4"
          alt="Juliano Lima"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms! 🚀</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/15468735?v=4"
          alt="Juliano Lima"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms! 🚀</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/15468735?v=4"
          alt="Juliano Lima"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms! 🚀</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
