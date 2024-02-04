import React from "react";
// import { Header, Footer } from "./components/index.js";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"


function Layout() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
