import React from "react";
import { useDirection } from "../../context/DirectionContext";

const Banner = ({ crumbs }) => {
  const { direction } = useDirection();
  return (
    <>
      <div class="container-fluid bg-breadcrumb bg-primary">
        <div class="container text-center py-5">
          {/* <div class="container text-center py-5" style={{ maxWidth: "900px" }}> */}
          <h3
            class="text-white display-3 mb-4 wow fadeInDown text-capitalize"
            data-wow-delay="0.1s"
          >
            {crumbs}
          </h3>
          <ol
            class="breadcrumb justify-content-center text-white mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li class="breadcrumb-item">
              <a href="index.html" class="text-white">
                {direction==="ltr"?"Home":"الرئيسية "}
              </a>
            </li>
            {/* <li class="breadcrumb-item">
              <a href="#" class="text-white">
                Pages
              </a>
            </li> */}
            <span className="px-2 " style={{opacity:".3"}}>/</span>
            <li class="breadcrumb-item active text-secondary text-capitalize">
              {crumbs}
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Banner;
