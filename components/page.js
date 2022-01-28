import React from "react";
import Footer from "./Footer";
import Navigation from "./navigation";

const Page = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Page;
