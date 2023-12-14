import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLoginContext } from '../../contexts/LoginProvider';
import logo from "../../assets/images/logo.png"

const DefaultLayout: React.FC = () => {

  const { token} = useLoginContext();
  if(!token){
    return <Navigate to="/login" />
  }  

  return (
    <>
      <nav>
        <div className='container'>
          <img src={logo} />
        </div>
      </nav>
      <Outlet />
      <footer>
        <div>CONTACT US support@ruralnet.ph</div> 
        <div>© RuralNet</div>
      </footer>
    </>
  );
};

export default DefaultLayout;