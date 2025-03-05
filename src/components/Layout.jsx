import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { Outlet } from "react-router";
import Bar from "./common/Bar";
import Spinner from "./common/Spinner";

const Layout = () => {
  return (
    <>
      <Spinner />
      <Bar />
      <Header />
      <Outlet />
      <Footer />
      {/* <!-- Back to Top --> */}
      <a href="#" class="btn btn-primary btn-lg-square back-to-top">
        <i class="fa fa-arrow-up"></i>
      </a>
    </>
  );
};

export default Layout;
