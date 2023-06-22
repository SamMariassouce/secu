import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { single_product_url as url } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import { Loading, Error, PageHero } from '../components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SingleRegistrePage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, []);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const { name, description, soustitre, diffr } = product;
  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/registre" className="btn btn-single">
          Retour au registre
        </Link>
        <div className="products-center">
          <section className="content">
            <h2>{name}</h2>
            <h5 className="price">{soustitre}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Validité du contrat:</span>
              {diffr < 0 ? 'plus valide' : 'valide'}
            </p>
            <p className="info">
              <span>Anomalie rapport:</span>
              {/* {stock > 0 ? 'non' : 'oui'} */}
            </p>
            <p className="info">
              <span>Observation:</span>
              {/*  {stock > 0 ? 'non' : 'oui'} */}
            </p>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleRegistrePage;
