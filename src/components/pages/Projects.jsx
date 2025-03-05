import React from "react";
import Banner from "../common/Banner";
import Paginate from "../common/Paginate";
import { useDirection } from "../../context/DirectionContext";

const Projects = () => {
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
      url: "/images/pro-3.jpg",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "/images/pro-4.jpg",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "/images/pro-5.jpg",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "/images/pro-6.jpg",
    },
  ];
  const { direction } = useDirection();

  return (
    <>
      <Banner crumbs={direction === "ltr" ? "projects" : "المشاريع"} />
      <div class="container-fluid training overflow-hidden py-5">
        <div class="container py-5">
          <div
            class="section-title text-left mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="sub-style">
              <h5 class="sub-title text-primary px-3">
                {" "}
                {direction === "ltr" ? "Our Projects" : "مشاريعنا"}
              </h5>
            </div>
            <h1 class="display-5 mb-4">
              {direction === "ltr"
                ? "Projects that demonstrate our level of professionalism"
                : "مشاريع تثبت مستوى احترافيتنا"}
            </h1>
            <p class="mb-0">
              {direction === "ltr"
                ? "This page showcases a selection of our latest projects across various industries. Each project reflects our commitment to delivering high-quality results with precision and efficiency. We take pride in completing these projects in record time while maintaining the highest standards of professionalism."
                : "تعرض هذه الصفحة مجموعة من أحدث مشاريعنا في مختلف المجالات. كل مشروع يعكس التزامنا بتقديم نتائج عالية الجودة بدقة وكفاءة. نفخر بإكمال هذه المشاريع في وقت قياسي مع الحفاظ على أعلى معايير الاحترافية.  "}
            </p>
          </div>
          {/* Card Start */}

          <div class="row g-4">
            {dataArray.map((prd, idx) => (
              <div
                key={idx}
                class="col-lg-6 col-lg-6 col-xl-4 wow fadeInUp "
                data-wow-delay={`${idx / 5}s`}
              >
                <div class="training-item">
                  <div class="training-inner " style={{ height: "32rem" }}>
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
                        {prd.title}
                      </a>
                      {/* <a href="#" class="h4 text-white mb-0">
                        Coaching
                      </a> */}
                    </div>
                  </div>
                  <div class="training-content bg-secondary rounded-bottom p-4">
                    <a href="projects/123456">
                      <h4 class="text-white">{prd.title}</h4>
                    </a>
                    <p class="text-white-50">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem, veritatis.
                    </p>
                    <a
                      class="btn btn-secondary rounded-pill text-white p-0"
                      href="projects/123456"
                    >
                      Read More{" "}
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
          {/* Card End */}
        </div>
      </div>
      <Paginate />
    </>
  );
};

export default Projects;
