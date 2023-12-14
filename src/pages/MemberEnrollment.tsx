import React from 'react';
import MemberEnrollmentForm from '../components/memberenrolment/MemberEnrollmentForm';


const MemberEnrollment: React.FC = () => {
  return (
    <>
      <div className='member_enrollment'>
        <div className='container'>
          <MemberEnrollmentForm />
        </div>
      </div>
    </>
  );
};

export default MemberEnrollment;