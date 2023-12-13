import React from 'react';
import Nav from '../components/Nav';
import MainMenu from '../components/MainMenu';

interface HomeProps {
  username: string;
}

const Home: React.FC<HomeProps> = ({ username }) => {
  return (
    <>
      <Nav />
      <h2>Welcome, {username}!</h2>
      <MainMenu />
    </>
  );
};

export default Home;
