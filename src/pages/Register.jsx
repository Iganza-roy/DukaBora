import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
  return (
    <div className='flex justify-center items-center'>
      <SignUp signInUrl='/login' fallbackRedirectUrl={'/login'} />
    </div>
  );
};

export default SignUpPage;
