import React from 'react';
import styled from 'styled-components';
import { Filters, ProductList, Sort, PageHero } from '../components';

const RegistrePage = () => {
  return (
    <main>
      <PageHero title="Registre" />
      <Wrapper className="page">
        <div className="section-center registre">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
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
