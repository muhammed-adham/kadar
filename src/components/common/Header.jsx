import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { LanguageContext } from "../../context/LanguageContext";
import { useDirection } from "../../context/DirectionContext";
import { GrLanguage } from "react-icons/gr";
import { BsSun } from "react-icons/bs";
import { PiMoonLight } from "react-icons/pi";
import { ThemeContext } from "../../context/ThemeContext";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    // Scroll to top
    scroll(0, 0);

    // Close the navbar after a short delay
    setTimeout(() => {
      setIsOpen(false);
      // window.location.reload();
    }, 300); // Adjust the delay as needed
  };

  const pageLinksAr = [
    { path: "", label: "الصفحة الرئيسية" },
    { path: "/about", label: "عن المصنع" },
    {
      path: "/products",
      label: "المنتجات",
      dropdown: [
        { path: "/products/civilian-products", label: "المنتجات المدنية" },
        {
          path: "/products/furnish-your-home-initiative",
          label: "مبادرة أفرش بيتك",
        },
        { path: "/products/hotel-furniture", label: "الأثاث الفندقي" },
        {
          path: "/products/al-ahly-bank-initiative",
          label: "مبادرة البنك الأهلي",
        },
        { path: "/products/corporate-products", label: "منتجات الشركات" },
        { path: "/products/military-products", label: "المنتجات العسكرية" },
      ],
    },
    { path: "/projects", label: "المشاريع" },
    { path: "/contact", label: "أتصل بنا" },
    { path: "/news", label: "آخر الأخبار" },
    { path: "/video-library", label: "معرض الفيديوهات" },
  ];

  const pageLinks = [
    { path: "", label: "home" },
    { path: "/about", label: "about" },
    {
      path: "/products",
      label: "Products",
      dropdown: [
        { path: "/products/civilian-products", label: "Civilian Products" },
        {
          path: "/products/furnish-your-home-initiative",
          label: "Furnish Your Home Initiative",
        },
        { path: "/products/hotel-furniture", label: "Hotel Furniture" },
        {
          path: "/products/al-ahly-bank-initiative",
          label: "Al-Ahly Bank Initiative",
        },
        { path: "/products/corporate-products", label: "Corporate Products" },
        { path: "/products/military-products", label: "Military Products" },
      ],
    },
    { path: "/projects", label: "projects" },
    { path: "/contact", label: "contact Us" },
    { path: "/news", label: "news" },
    { path: "/video-library", label: "video-library" },
  ];

  const { language, changeLanguage } = useContext(LanguageContext);
  const { direction, toggleDirection } = useDirection();

  const handleChangeLang = (e) => {
    const newLanguage = language === "ar" ? "en" : "ar";
    changeLanguage(newLanguage);
    toggleDirection(); // Toggle direction based on language change
    window.location.reload();
  };

/*   // Dark mode state
  const [themeState, setThemeState] = useState();

  // Get prefer color schema from local storage or operating system if no explicit theme is specified before
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
        darkMode();
      } else if (window.matchMedia("(prefers-color-scheme:light)").matches) {
        lightMode();
      }
    } else {
      if (localStorage.getItem("theme") === "dark") {
        darkMode();
      } else if (localStorage.getItem("theme") === "light") {
        lightMode();
      }
    }
  }, []); // Removed themeState dependency

  // Theme mode handlers
  const darkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    setThemeState("dark");
  };

  const lightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    setThemeState("light");
  };

  // Theme toggle handler
  const toggleHandler = () => {
    if (themeState === "dark") {
      lightMode();
    } else {
      darkMode();
    }
  }; */

  const { themeState, toggleHandler } = useContext(ThemeContext);

  return (
    <>
      <div class="container-fluid nav-bar p-0">
        <nav class="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
          {/* <!-- Logo Start--> */}
          <Link to={"/"} class="navbar-brand p-0" onClick={() => scroll(0, 0)}>
            <h1 class="display-5 text-secondary m-0">
              {themeState==="light"?
              
              <img
                src="/images/logo-kader.png"
                class="img-fluid"
                alt="KADER"
              />
              :
              <img
                src="/images/logo-kader-white.png"
                class="img-fluid"
                alt="KADER"
              />
              }
            </h1>
          </Link>
          {/* <!-- Logo End--> */}

          {/* <!--Toggler Start Mobile Version--> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            onClick={handleToggle}
          >
            {/* <span class="fa fa-bars"></span> */}
            <FaBars />
          </button>
          {/* <!--Toggler End Mobile Version--> */}

          {/* <!--Nav Start--> */}
          <div
            class={`collapse navbar-collapse position-relative gap-3 ${
              isOpen ? "show" : ""
            } id="navbarCollapse`}
          >
            {/* <!--Main Links Start--> */}
            <div class="navbar-nav me-auto py-0">
              {(direction === "ltr" ? pageLinks : pageLinksAr).map(
                (link, idx) =>
                  link.dropdown ? (
                    <div className="nav-item dropdown" key={idx}>
                      {/* <!--Products Link--> */}
                      <NavLink
                        key={idx}
                        to={link.path}
                        className="nav-link"
                        style={{ textTransform: "capitalize" }}
                        onClick={() => {
                          scroll(0, 0), navigate("/products");
                        }}
                        data-bs-toggle="dropdown"
                      >
                        <span class="dropdown-toggle">{link.label}</span>
                      </NavLink>

                      {/* <!--Sub Links Start--> */}
                      <div className="dropdown-menu m-0">
                        {link.dropdown.map((dropdownItem, dIdx) => (
                          <a
                            key={dIdx}
                            // to={dropdownItem.path}
                            className="dropdown-item"
                            onClick={() => {
                              navigate(dropdownItem.path, {
                                state: { data: dropdownItem.label }
                              });
                              scroll(0,0)
                            }} // Call the updated function
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                      {/* <!--Sub Links End--> */}
                    </div>
                  ) : (
                    <NavLink
                      key={idx}
                      to={{ pathname: link.path }}
                      className="nav-item nav-link"
                      style={{ textTransform: "capitalize" }}
                      onClick={() => handleLinkClick(link.path)} // Call the updated function
                    >
                      {link.label}
                    </NavLink>
                  )
              )}
              {/* <!--Main Links End--> */}

              <div className="d-none d-lg-block vertical-line m-4"></div>

              {/* <!-- Theme Toggler Start--> */}
              <div className="nav-item dropdown">
                <div
                  className="nav-link"
                  style={{ textTransform: "capitalize", cursor: "pointer" }}
                  data-bs-toggle="dropdown"
                >
                  <span class="dropdown-toggle">
                  {themeState === "dark"? 
                  <PiMoonLight className="mx-1"/>:
                    <BsSun className="mx-1" />
                }
                    {direction === `ltr` ? `Theme` : `الوضع `}
                  </span>
                </div>
                <div className="dropdown-menu m-0">
                  <a
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                    onClick={toggleHandler}
                  >
                    {themeState === "dark"
                      ? direction === "ltr"
                        ? "Light"
                        : "الوضع الفاتح"
                      : direction === "ltr"
                      ? "Dark"
                      : "الوضع الداكن"}
                  </a>
                </div>
              </div>
              {/* <!-- Theme Toggler End--> */}

              {/* <!-- Language Toggler Start--> */}
              <div className="nav-item dropdown ">
                <div
                  className="nav-link "
                  style={{ textTransform: "capitalize", cursor: "pointer" }}
                  data-bs-toggle="dropdown"
                >
                  <span class="dropdown-toggle">
                    <GrLanguage className="mx-1" />
                    {direction === `ltr` ? ` EN ` : ` ع `}
                  </span>
                </div>
                <div className="dropdown-menu m-0">
                  <a
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => handleChangeLang(e)} // Call the updated function
                  >
                    {language === "ar" ? "English" : "العربية"}
                  </a>
                </div>
              </div>
              {/* <!-- Language Toggler End--> */}
            </div>
            {/* <!-- Search Start--> */}
            <button
              class="btn btn-primary btn-md-square border-secondary end-0"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i class="fa fa-search"></i>
            </button>
            {/* <!-- Search End--> */}
          </div>
        </nav>
      </div>

      {/* <!-- Modal Search Start --> */}
      <div
        class="modal fade"
        id="searchModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content rounded-0">
            <div class="modal-header">
              <h4
                class="modal-title text-secondary mb-0"
                id="exampleModalLabel"
              >
                Search by keyword
              </h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex align-items-center">
              <div class="input-group w-75 mx-auto d-flex">
                <input
                  type="search"
                  class="form-control p-3"
                  placeholder="keywords"
                  aria-describedby="search-icon-1"
                />
                <span id="search-icon-1" class="input-group-text p-3">
                  <i class="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal Search End --> */}
    </>
  );
};

export default Header;
