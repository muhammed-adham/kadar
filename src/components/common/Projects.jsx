import React, { useState } from "react";
import { useDirection } from "../../context/DirectionContext";
import OverlayModal from "./OverlayModal";
import { Link, useNavigate } from "react-router";

const Projects = () => {
  const { direction } = useDirection();
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const handleShow = (item) => {
    setSelectedItem(item);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const dataArray = [
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "/images/pro-1.jpg",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "/images/pro-2.jpg",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "/images/pro-5.jpg",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "/images/pro-4.jpg",
    },
  ];

  const navigate=useNavigate()

  return (
    <>
      <OverlayModal
        show={show}
        handleClose={handleClose}
        title={selectedItem?.title}
        description={selectedItem?.desc}
        // videoID={selectedItem?.videoID}
        imgSrc={selectedItem?.url}
        mediaType="image"
      />
      <div class="container-fluid training overflow-hidden pb-5">
        <div class="container py-5">
          <div class="office pt-5">
            <div
              class="section-title text-center mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div class="sub-style">
                <h5 class="sub-title text-primary px-3">
                  {direction === "ltr" ? "projects" : "أحدث المشاريع"}
                </h5>
              </div>
              <h1 class="display-5 mb-4">
                {direction === "ltr"
                  ? "Discover Our Newest Projects"
                  : "نظرة على أحدث مشاريعنا"}
              </h1>
              <p className="mb-0">
                {direction === "ltr"
                  ? "Discover our most recent ambitious projects and ongoing efforts. We provide a glimpse into the projects currently underway, the innovations we are leading, and the solutions we strive to deliver. Stay informed about our journey towards achieving our goals and making a difference."
                  : "تعرفوا على آخر مشاريعنا الطموحة وجهودنا الحالية. نقدم لكم لمحة عن المشاريع قيد التنفيذ، والابتكارات التي نقودها، والحلول التي نسعى لتقديمها. ابقوا على اطلاع دائم بمسيرتنا نحو تحقيق أهدافنا وإحداث فرق."}
              </p>
            </div>
            <div class="row g-4 justify-content-center">
              {dataArray.map((prd, idx) => (
                <div
                  class="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp "
                  data-wow-delay={`${idx / 5}s`}
                >
                  <div class="training-item">
                    <div class="training-inner" style={{ height: "24rem" }}>
                      <img
                        src={prd.url}
                        class="img-fluid w-100 rounded"
                        alt="Image"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <div class="training-title-name">
                        <a href="#" class="h4 text-white mb-0">
                          {direction === "ltr"
                            ? "Kader Factory, Arab Organization for Industrialization"
                            : " مصنع قادر الهيئة العربية للتصنيع"}
                        </a>
                      </div>
                    </div>
                    <div class="training-content bg-secondary rounded-bottom p-4">
                      <a href="#">
                        <h4 class="text-white">
                          {" "}
                          {direction === "ltr"
                            ? "Kader Factory, Arab Organization for Industrialization"
                            : " مصنع قادر الهيئة العربية للتصنيع"}
                        </h4>
                      </a>
                      <p class="text-white-50">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem, veritatis.
                      </p>
                      <a
                        class="btn btn-secondary rounded-pill text-white p-0"
                        onClick={() => {
                          // handleShow(prd);
                          navigate('/projects/single-project'), scroll(0,0)
                        }}
                        // href="#"
                      >
                        {direction === "ltr" ? "Read More" : "اقرأ المزيد"}{" "}
                        <i
                          class={`fas fa-arrow-${
                            direction === "ltr" ? "right" : "left"
                          } px-1`}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div class="col-12 text-center pt-5">
              <Link
                class="btn btn-primary border-secondary rounded-0 py-3 px-5 wow fadeInUp "
                data-wow-delay="0.1s"
                to="/projects"
                onClick={() => scroll(0, 0)}
              >
                {direction === "ltr" ? "View All" : "عرض الكل"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
