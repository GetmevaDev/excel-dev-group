import { useState } from "react";

import { Sidebar } from "../sidebar/sidebar";

import { MenuButton } from "..";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuButton
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        width={32}
        color="#D93B32"
        height={32}
      />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
    </>
  );
};
