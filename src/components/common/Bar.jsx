import React from "react";
import { TbBrandWikipedia } from "react-icons/tb";
import { useDirection } from "../../context/DirectionContext";

const Bar = () => {
  const { direction } = useDirection();
  return (
    <>
      {/* <!-- Topbar Start --> */}
      <div class="container-fluid bg-primary text-white px-5 d-none d-lg-block ">
        <div class="row gx-0 align-items-center">
          <div class="col-lg-5 text-center text-lg-start mb-lg-0">
            <div class="d-flex contact-info">
              <a
                href="mailto:marketing@kader-factory.com"
                class="text-white m-4"
              >
                <i class="fas fa-envelope text-gray m-2"></i>
                marketing@kader-factory.com
              </a>
              <a
                href="https://wa.me/201030009248"
                target="_blank"
                class="text-white my-auto"
              >
                <i class="fas fa-phone-alt text-gray m-2 "></i><span dir="ltr">+2010 3000 9248</span>
              </a>
            </div>
          </div>
          <div class="col-lg-3 row-cols-1 text-center mb-2 mb-lg-0">
            <div
              class="d-inline-flex align-items-center social-icons"
              style={{ height: "45px" }}
            >
              {/* Wikipedia */}
              {/* <a
                class="btn btn-sm btn-outline-light btn-square rounded-circle m-2 border-white"
                href="https://ar.wikipedia.org/wiki/%D9%85%D8%B5%D9%86%D8%B9_%D9%82%D8%A7%D8%AF%D8%B1_%D9%84%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D8%A7%D8%AA_%D8%A7%D9%84%D9%85%D8%AA%D8%B7%D9%88%D8%B1%D8%A9"
                target="_blank"
              >
                <i class="fab fw-normal text-white ">
                  <TbBrandWikipedia />
                </i>
              </a> */}
              {/* Facebook */}
              <a
                class="btn btn-sm btn-outline-light btn-square rounded-circle m-2 border-white"
                href="https://www.facebook.com/kader.factory.eg/"
                target="_blank"
              >
                <i class="fab fa-facebook-f fw-normal text-white"></i>
              </a>
              {/* Linkedin */}
              <a
                class="btn btn-sm btn-outline-light btn-square rounded-circle m-2 border-white"
                href="https://www.linkedin.com/company/arab-organization-for-industrialization/posts/?feedView=all"
                target="_blank"
              >
                <i class="fab fa-linkedin-in fw-normal text-white"></i>
              </a>
              {/* Instagram */}
              <a
                class="btn btn-sm btn-outline-light btn-square rounded-circle m-2 border-white"
                href="https://www.instagram.com/kader_factory_official/?igsh=MTltaHNyaXcyNDczeQ%3D%3D#"
                target="_blank"
              >
                <i class="fab fa-instagram fw-normal text-white"></i>
              </a>
              {/* Youtube */}
              <a
                class="btn btn-sm btn-outline-light btn-square rounded-circle border-white"
                href="https://www.youtube.com/@kaderfactory8960"
                target="_blank"
              >
                <i class="fab fa-youtube fw-normal text-white "></i>
              </a>
            </div>
          </div>
          <div class={`col-lg-4 text-center ${direction==='ltr'?'text-lg-end':`text-lg-start`} mb-lg-0`}>
            <div
              class="d-inline-flex align-items-center pt-2"
              style={{ height: "45px" }}
            >
              <p>{direction==="ltr"?"Designed by AOI Systems Administration":"مصمم بواسطة إدارة النظم بالهيئة العربية للتصنيع"} </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}
    </>
  );
};

export default Bar;
