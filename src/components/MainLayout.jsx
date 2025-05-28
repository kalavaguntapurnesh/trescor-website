import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* NavBar */}
      <Navbar />
      {/* Hero */}
      <Hero />
    </div>
  );
};

export default MainLayout;
