import React from "react";
//import PropTypes from 'prop-types'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
export function AppLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="main">{children}</div>
      <Footer />
      {/* APP LEVEL NOTIFICATION COMPONENTS GOES HERE */}
    </div>
  );
}

AppLayout.propTypes = {};
