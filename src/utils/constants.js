import React from 'react';
export const links = [
  {
    id: 1,
    text: 'Accueil',
    url: '/',
  },
  {
    id: 2,
    text: 'Registre',
    url: '/registre',
  },
  {
    id: 3,
    text: 'Exploitation',
    url: '/exploitation',
  },
  {
    id: 4,
    text: 'Plans',
    url: '/plan',
  },
];

//export const products_url = 'https://course-api.com/react-store-products';
export const products_url = '/.netlify/functions/registre';
//export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
export const single_product_url = `/.netlify/functions/single-registre?id=`;
