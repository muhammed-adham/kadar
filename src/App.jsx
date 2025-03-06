import React, { useContext, useEffect } from "react";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import News from "./components/pages/News";
import Videos from "./components/pages/Videos";
import SingleProduct from "./components/pages/SingleProduct";
import Category from "./components/pages/Category";
import { LanguageContext } from "./context/LanguageContext";
import SingleProject from "./components/pages/SingleProject";

const App = () => {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        {
          path: "/products",
          element: <Category />,
        },
        { path: "products/civilian-products", element: <Products /> },
        {
          path: "products/furnish-your-home-initiative",
          element: <Products />,
        },
        { path: "products/hotel-furniture", element: <Products /> },
        { path: "products/al-ahly-bank-initiative", element: <Products /> },
        { path: "products/corporate-products", element: <Products /> },
        { path: "products/military-products", element: <Products /> },
        { path: "/projects", element: <Projects /> },
        { path: "/contact", element: <Contact /> },
        { path: "/news", element: <News /> },
        { path: "/video-library", element: <Videos /> },
        { path: "/single-product", element: <SingleProduct /> },
        { path: "/projects/single-project", element: <SingleProject /> },
      ],
    },
  ]);

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    // Set the direction of the document based on the current language
    document.body.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]); // Update the direction whenever the language changes

  return (
    <>
      {/* <DirectionProvider> */}
      <RouterProvider router={Router} />
      {/* </DirectionProvider> */}
    </>
  );
};

export default App;
