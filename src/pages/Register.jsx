import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
  return (
    <div className='flex justify-center items-center'>
      <SignUp path='/register' routing='path' />
    </div>
  );
};

export default SignUpPage;
