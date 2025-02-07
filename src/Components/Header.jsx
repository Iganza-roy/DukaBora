import { UserButton } from '@clerk/clerk-react';

const Header = () => {
  return (
    <div>
      <UserButton userProfileMode='modal' />
    </div>
  );
};

export default Header;
