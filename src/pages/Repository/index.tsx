import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/15468735?v=4"
            alt="Juliano"
          />
          <div>
            <strong>julianohbl/pagina-inicial-instagram-d-i-o</strong>
            <p>Descrição deo repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>15</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>2</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>7</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="aeuhfsiuf">
          <div>
            <strong>aweshsfiuh</strong>
            <p>asweiufhsiufgh</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
