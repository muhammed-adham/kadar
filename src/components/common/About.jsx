import React from "react";
import { Link } from "react-router";
import { useDirection } from "../../context/DirectionContext";

const About = () => {
  const { direction } = useDirection();
  const dataArrayAr =[ {
    title: "نحن مصنع موثوق به ومعتمد من الهيئة العربية للتصنيع",
    subTitle: "عن مصنع قادر",
    text: "في مصنع قادر، نفخر بعقود من الخبرة والابتكار في مجال التصنيع. كمصنع موثوق به ومعتمد من الهيئة العامة للتنظيم والفحص (AOI)، نحن ملتزمون بتقديم منتجات وحلول عالية الجودة تلبي المعايير العالمية. تفانينا في التميز ورضا العملاء جعلنا روادًا في مجالنا. ",

  }]
  const dataArray = [{
    title: "We’re Trusted Factory Affiliated with AOI",
    subTitle: "About KADER",
    text: "At KADER, we pride ourselves on decades of expertise and innovation in manufacturing. As a trusted factory affiliated with the Authority of Organization and Inspection (AOI), we are committed to delivering high-quality products and solutions that meet global standards. Our dedication to excellence and customer satisfaction has made us a leader in our industry.  ",
  }]
  return (
    <>
      <div
        class="container-fluid overflow-hidden py-5 bg-white w-100"
        style={{ width: "80%" }}
      >
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
              <div
                class="bg-light rounded"
                style={{ height: "100%", width: "100%" }}
              >
                <img
                  src="/images/about.webp"
                  class="img-fluid w-100"
                  style={{
                    marginBottom: " -7px",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  alt="Image"
                />
              </div>
            </div>
            <div class="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">
              {(direction === "ltr" ? dataArray : dataArrayAr).map(
                (el, idx) => (
                  <div key={idx}>
                    <h5 class="sub-title sub-title-about p-3">{el.subTitle}</h5>
                    <h1 class="display-5 mb-4">{el.title}</h1>
                    <p class="mb-4">
                      {el.text}
                      <br />
                      <Link
                        className="btn btn-secondary px-0"
                        to={"/about"}
                        style={{ color: "#0091db" }}
                        onClick={()=>scroll(0,0)}
                      >
                        {direction==='ltr'?"Read More":"اقرأ المزيد"} <i class={`fa fa-arrow-${direction==='ltr'?"right":"left"} px-1`}></i>
                      </Link>
                    </p>
                  </div>
                )
              )}
              <div class="row gy-4 align-items-center">
                <div class="col-4 col-md-3">
                  <div class="bg-light text-center rounded p-3">
                    <div class="mb-2">
                      <i class="fas fa-ticket-alt fa-4x text-primary"></i>
                    </div>
                    <h1 class="display-5 fw-bold mb-2 text-dark">70+</h1>
                    <p class="text-muted mb-0">{direction==='ltr'?"Years of Experience":"سنوات من الخبرة"}</p>
                  </div>
                </div>
                <div class="col-8 col-md-9">
                  <div class="d-flex flex-wrap">
                    <div
                      id="phone-tada"
                      class="d-flex align-items-center justify-content-center m-4"
                    >
                      <a
                        href=""
                        class="position-relative wow tada"
                        data-wow-delay=".9s"
                      >
                        <i class="fa fa-phone-alt text-primary fa-3x"></i>
                        <div
                          class="position-absolute"
                          style={{ top: "0", left: "25px" }}
                        >
                          <span>
                            <i class="fa fa-comment-dots text-secondary"></i>
                          </span>
                        </div>
                      </a>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <span class="text-primary">{direction==='ltr'?"Have any questions?":"هل لديك أي أسئلة؟"}</span>
                      <span
                        class="text-black fw-bold fs-5"
                        style={{ letterSpacing: "2px" }}
                      >
                        {direction==='ltr'?"call us":"اتصل بنا"}: <span dir="ltr"> +2010 3000 9248</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
