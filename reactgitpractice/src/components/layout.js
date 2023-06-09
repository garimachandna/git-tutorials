import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, title, description, keywords }) => {
  return (
    <div className="layout">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <title>{title}</title>
      </Helmet>

      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "React Git Practice",
  description: "React Git Practice",
  keywords: "React Git Practice",
};

export default Layout;
