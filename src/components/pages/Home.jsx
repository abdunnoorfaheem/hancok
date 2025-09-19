import React from 'react'
import Header from '../layouts/Header';
import Banner from '../layouts/Banner';
import Counter from '../layouts/Counter';
import PopularGames from '../layouts/PopularGames';

const Home = () => {
  return (
    <>
      <Banner/>
      <Counter/>
      <PopularGames/>
    </>
  )
}

export default Home;
