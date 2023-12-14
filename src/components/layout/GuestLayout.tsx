import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const GuestLayout: React.FC = () => {
  return (
    <>
      <nav>
        <img src={logo} />
      </nav>
      <div className="guestLayout">
        <Outlet />
      </div>
      <footer>
        <div>CONTACT US support@ruralnet.ph</div> 
        <div>© RuralNet</div>
      </footer>
    </>
  );
};

export default GuestLayout;