import React from "react";
import NavBar from "./Navbar";
import Hero from "./Hero";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-auto min-h-screen">
      {/* NavBar */}
      <NavBar />
      {/* Hero */}
      <Hero />
    </div>
  );
};

export default MainLayout;
