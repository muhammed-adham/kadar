import React, { useContext } from "react";
import { useDirection } from "../../context/DirectionContext";
import { Link } from "react-router";
import { ThemeContext } from "../../context/ThemeContext";

const Footer = () => {
  const { direction } = useDirection();

  const pageLinksAr = [
    { path: "", label: "الصفحة الرئيسية" },
    { path: "/about", label: "عن المصنع" },
    {
      path: "/products",
      label: "المنتجات",
      dropdown: [
        { path: "/products/civilian-products", label: "المنتجات المدنية" },
        { path: "/products/products/furnish-your-home-initiative", label: "مبادرة أفرش بيتك" },
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
    { path: "/contact", label: "أتصل ينا" },
    { path: "/news", label: "آخر الأخبار" },
    { path: "/video-library", label: "معرض الفيديو" },
  ];

  const pageLinks = [
    { path: "", label: "home" },
    { path: "/about", label: "about" },
    {
      path: "/products",
      label: "Products",
      dropdown: [
        { path: "/products/civilian-products", label: "Civilian Products" },
        { path: "/products/furnish-your-home-initiative", label: "Furnish Your Home Initiative" },
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

    const { themeState, toggleHandler } = useContext(ThemeContext);

  return (
    <>
      <div class="container-fluid footer bg-primary py-5  fadeIn" data-wow-delay="0.2s">
        <div class="container  py-5">
          <div class="row g-5">
            <div class="col-md-6 col-lg-6 col-xl-3 ps-auto">
              <div class="footer-item d-flex flex-column">
                <h4 class="text-white mb-4">
                  {direction === `ltr` ? `Contact Info` : `تواصل معنا`}
                </h4>
                <a href="" className="">
                  <i class="fa fa-map-marker-alt m-2"></i>{" "}
                  {direction === `ltr`
                    ? `2 El Tayaran St, Nasr
                  City`
                    : `2 ش الطيران، مدينة
 نصر`}
                </a>
                <a href="mailto:marketing@kader-factory.com">
                  <i class="fa fa-envelope m-2"></i> marketing@kader-factory
                </a>
                <a href="tel:+201030009248" target="_blank">
                  <i class="fa fa-phone m-2"></i>
                  <span dir="ltr">+2010 3000 9248</span>
                </a>
                <a
                  href="https://wa.me/201030009248"
                  target="_blank"
                  class="mb-3"
                >
                  <i class="fa fa-comment m-2"></i>{" "}
                  <span dir="ltr">+2010 3000 9248</span>
                </a>
                <div class="d-flex align-items-center">
                  <i class="fas fa-share fa-2x text-secondary m-2"></i>
                  <a
                    class="btn mx-1"
                    href="https://www.facebook.com/kader.factory.eg/"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a
                    class="btn mx-1"
                    href="https://www.youtube.com/@kaderfactory8960"
                    target="_blank"
                  >
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a
                    class="btn mx-1"
                    href="https://www.instagram.com/kader_factory_official/?igsh=MTltaHNyaXcyNDczeQ%3D%3D#"
                    target="_blank"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                  {/* <a class="btn mx-1" href="">
                    <i class="fab fa-linkedin-in"></i>
                  </a> */}
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-6 col-xl-2 ps-auto">
              <div class="footer-item d-flex flex-column">
                <h4 class="text-white mb-4">
                  {direction === "ltr"
                    ? `Expolre`
                    : `بيانات المتجر
`}
                </h4>
                {(direction === "ltr" ? pageLinks : pageLinksAr).map(
                  (el, idx) => (
                    <Link
                      key={idx}
                      to={el.path}
                      onClick={() => scroll(0, 0)}
                      className="text-capitalize"
                    >
                      <i class="fas fa-angle-right m-2 "></i> {el.label}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div class="col-md-6 col-lg-6 col-xl-3 ps-auto">
              <div class="footer-item d-flex flex-column">
                <h4 class="text-white mb-4">
                  {direction === "ltr" ? `Our Services` : `الأقسام`}
                </h4>

                {(direction === "ltr" ? pageLinks : pageLinksAr).map(
                  (link, idx) =>
                    link.dropdown
                      ? link.dropdown.map((el, idx) => (
                          <Link
                            key={idx}
                            to={el.path}
                            onClick={() => scroll(0, 0)}
                          >
                            <i class="fas fa-angle-right m-2"></i> {el.label}
                          </Link>
                        ))
                      : null
                )}
              </div>
            </div>
            {/* 
            <div class="col-md-6 col-lg-6 col-xl-3 ps-auto ">
              <div class="footer-item d-flex flex-column">
                <h4 class="text-secondary text-left mb-4">Map</h4>
                <div class="col-11  wow zoomIn" data-wow-delay="0.1s">
                  <div class="rounded h-100">
                    <iframe
                      class="rounded w-100"
                      style={{ height: "11rem" }}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.33663490776!2d31.21726481382875!3d30.059556316628406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sbd!4v1739279859177!5m2!1sen!2sbd"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div> */}

            <div class="col-md-6 col-lg-6 col-xl-4 ps-auto">
              <div class="footer-item">
                <h4 class="text-white mb-4 ">
                  {direction === "ltr" ? `Newsletter` : `الرسائل الإخبارية`}
                </h4>
                <p class="text-white mb-3 ">
                  {direction === "ltr"
                    ? `Be the first to know about new products and exclusive events`
                    : `كن أول المطلعين على المنتجات الجديدة والفعاليات الحصرية`}
                  {/* Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. */}
                </p>
                <div class="position-relative mx-auto rounded-pill d-flex">
                  <input
                    class="form-control border-0 rounded-0 py-2 ps-4 h-100"
                    type="text"
                    placeholder={
                      direction === `ltr`
                        ? `Enter your email`
                        : `ادخل بريدك الالكتروني`
                    }
                  />
                  <button
                    type="button"
                    class="btn btn-primary h-150 rounded-0 border-0 "
                  >
                    {direction === "ltr" ? `SignUp` : `اشتراك`}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Copyright Start --> */}
      <div class="container-fluid copyright py-4 bg-white ps-0 bg-transparent">
        <div class="container">
          <div class="row g-4 align-items-center">
            <div class="col-md-6 text-center text-md-start mb-md-0">
              <span class="text-dark">
                {direction === "ltr" ? (
                  <>
                    Copyright <i className="fa fa-copyright text-dark m-2"></i>
                    Kader Factory for Advanced Industries, 2025 All rights
                    reserved
                  </>
                ) : (
                  <>
                    حقوق النشر{" "}
                    <i className="fa fa-copyright text-dark m-2"></i>
                    جميع الحقوق محفوظة لمصنع قادر للصناعات المتطورة 2025
                  </>
                )}
              </span>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-6 ps-auto">
              <div class="footer-item d-flex justify-content-end gap-.5">
                <img
                  src="/images/pay-4.svg"
                  alt="img"
                  className="px-2"
                  style={{ height: "1.2rem", objectFit: "contain" }}
                />
                <img
                  src="/images/pay-3.svg"
                  alt="img"
                  className="px-2"
                  style={{ height: "1.2rem", objectFit: "contain" }}
                />
                <img
                  src={`/images/pay-1${themeState==="dark"?"-white":""}.svg`}
                  alt="img"
                  className="px-2"
                  style={{ height: "1.2rem", objectFit: "contain" }}
                />
                <img
                  src={`/images/pay-2${themeState==="dark"?"-white":""}.svg`}
                  alt="img"
                  className="px-2"
                  style={{ height: "1.2rem", objectFit: "contain" }}
                />
              </div>
            </div>
            {/* <div class="col-md-6 text-center text-md-end text-white">
              Designed By{" "}
              <a class="border-bottom text-white" href="https://htmlcodex.com">
                HTML Codex
              </a>{" "}
              Distributed By{" "}
              <a class="border-bottom text-white" href="https://themewagon.com">
                ThemeWagon
              </a>
            </div> */}
          </div>
        </div>
      </div>
      {/* <!-- Copyright End --> */}
    </>
  );
};

export default Footer;
