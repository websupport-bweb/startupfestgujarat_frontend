import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSidebarClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Navbar onMobileMenuToggle={handleMobileMenuToggle} />
      <Sidebar isOpen={mobileMenuOpen} onClose={handleSidebarClose} />
    </>
  );
}