import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLoginContext } from '../../contexts/LoginProvider';


const DefaultLayout: React.FC = () => {

  const { token} = useLoginContext();
  if(!token){
    return <Navigate to="/login" />
  }  

  return (
    <>
      <Outlet />
    </>
  );
};

export default DefaultLayout;