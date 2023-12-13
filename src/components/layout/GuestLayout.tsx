import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav';

const GuestLayout: React.FC = () => {
  return (
    
    <div className="guestLayout">
      <Nav></Nav>
      <Outlet />
    </div>
  );
};

export default GuestLayout;