import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/map.svg';

const PlansPage = () => {
  return (
    <main>
      <PageHero title="Plans" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice illustration" />
        <article>
          <div className="title">
            <h2>les plans</h2>
            <div className="underline"></div>
          </div>
          <p>Nous avons 2 bibliothèques de plans:</p>
          <p>
            Une pour visionner les plans.
            <br />
            <a
              href="https://cps-planlow.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Cliquez ici
            </a>
          </p>

          <p>
            Une autre pour les imprimer: <br />
            les images de cette bibliothèque ont une très haute résolution.
            Selon votre débit internet, cela pourrait prendre plus ou moins de
            temps.
            <br />
            <a
              href="https://cps-plans.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Cliquez Là
            </a>
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    display: block;
    border-radius: var(--radius);
    height: 350px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default PlansPage;
