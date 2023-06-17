import React from 'react';
import styled from 'styled-components';
import { Filters, ProductList, Sort, PageHero } from '../components';

const RegistrePage = () => {
  return <h4>registre page</h4>;
};

const Wrapper = styled.div`
  .registre {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .registre {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default RegistrePage;
