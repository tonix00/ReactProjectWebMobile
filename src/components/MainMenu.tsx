import React from 'react';
import { useNavigate  } from 'react-router-dom';

const MainMenu: React.FC = () => {
  const navigate  = useNavigate ();
  
  const handleMemberListClick = () => {
    // Navigate to the MemberEnrollment component
    navigate('/member_enrollment');
  };

  return (
    <div className='main_menu'>
      
      <h5>Dashboard</h5>
      <br />

      <h5><u>Member-Related</u></h5>
      <button className='btn_primary' onClick={handleMemberListClick}>Member list</button>
      <button className='btn_primary'>Center list</button>
      
      <br />
      <h5><u>Registration</u></h5>
      <button className='btn_primary'>New Registration</button>
      <button className='btn_primary'>Renewals</button>
      
      <br />
      <button className='btn_primary'>Payment</button>
      <button className='btn_primary'>Notification</button>
    </div>
  );
};

export default MainMenu;