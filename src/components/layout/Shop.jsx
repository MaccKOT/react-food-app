import React, { useState, useEffect } from 'react';
// import { API_KEY, API_URL } from '../../../config';
// import mockupData from '../../mockupData';
import Preloader from '../Preloader';

const Shop = () => {
  const loading = false;
  return (
    <main className='container content'>
      {loading ? <Preloader /> : 'Main component'}
    </main>
  );
};

export default Shop;
