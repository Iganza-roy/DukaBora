import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div className='flex justify-center items-center'>
      <SignIn signUpUrl='/register' fallbackRedirectUrl={'/'} aftr />
    </div>
  );
};

export default Login;
