import { SignUp } from '@clerk/clerk-react';

const VerifyEmailPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <SignUp path='/register/verify-email-address' />
    </div>
  );
};

export default VerifyEmailPage;
