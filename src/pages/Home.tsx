import React from 'react';
import MainMenu from '../components/MainMenu';


interface HomeProps {
  username: string;
}

const Home: React.FC<HomeProps> = ({ username }) => {
  return (
    <>
      <div className='home'>
        <div className='container'>
        <h2>Welcome, {username}!</h2>
        <MainMenu />
        </div> 
      </div>  
    </>
  );
};

export default Home;
