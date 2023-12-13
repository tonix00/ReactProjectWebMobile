import React from 'react';
import { useNavigate  } from 'react-router-dom';

const MainMenu: React.FC = () => {
  const navigate  = useNavigate ();
  
  const handleMemberListClick = () => {
    // Navigate to the MemberEnrollment component
    navigate('/member_enrolment');
  };

  return (
    <div>
      <br />
      <br />
      <h5>Dashboard</h5>
      <br />

      <h5><u>Member-Related</u></h5>
      <button className='btn btn-outline-primary' onClick={handleMemberListClick}>Member list</button>
      <button className='btn btn-outline-primary'>Center list</button>
      
      <br />
      <h5><u>Registration</u></h5>
      <button className='btn btn-outline-primary'>New Registration</button>
      <button className='btn btn-outline-primary'>Renewals</button>
      
      <br />
      <button className='btn btn-outline-primary'>Payment</button>
      <button className='btn btn-outline-primary'>Notification</button>
    </div>
  );
};

export default MainMenu;