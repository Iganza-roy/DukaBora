import { useState, createContext } from 'react';

export const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SideBarContext.Provider
      value={{ isOpen, setIsOpen, handleOpen, handleClose }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;
