import { SignIn } from '@clerk/clerk-react';

const AdminLogin = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <SignIn fallbackRedirectUrl={'/admin/dashboard'} />
    </div>
  );
};

export default AdminLogin;
