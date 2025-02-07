import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div className='flex justify center items-center h-screen'>
      <SignIn path='/login' routing='path' />
      Hello
    </div>
  );
};

export default Login;
