import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";


const Container = ({ children }) => {
  return (
    <div className="site-container">
      <Header />
      <div className="site-children">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Container;