import React from "react";
import Banner from "../common/Banner";
import { useDirection } from "../../context/DirectionContext";
import { useNavigate } from "react-router";

const Category = () => {
  const dataArray = [
    {
      title: "Civilian Products",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "/images/b-2.jpg",
    },
    {
      title: "Furnish Your Home Initiative",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "/images/ctg-8.jpg",
    },
    {
      title: "Hotel Furniture",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "/images/b-8.jpg",
    },
    {
      title: "Al-Ahly Bank Initiative",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "/images/b-4.jpg",
    },
    {
      title: "Corporate Products",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "/images/ctg-3.jpg",
    },
    {
      title: "Military Products",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "/images/b-6.avif",
    },
  ];
  const { direction } = useDirection();

  const navigate=useNavigate()

  return (
    <>
      <Banner crumbs={direction === "ltr" ? "Categories" : "الأقسام"} />
      <div class="container-fluid training overflow-hidden py-5">
        <div class="container py-5">
          <div
            class="section-title text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="sub-style">
              <h5 className="sub-title text-primary px-3">
                {direction === "ltr" ? "CHECK OUR PRODUCTS" : "اكتشف أقسامنا"}
              </h5>
            </div>
            <h1 className="display-5 mb-4">
              {direction === "ltr"
                ? "Explore Our Range of Products"
                : "استكشف مجموعة منتجاتنا"}
            </h1>
            <p className="mb-0">
              {direction === "ltr"
                ? "Discover a wide variety of high-quality products tailored to meet your needs. From innovative technology solutions to stylish home furniture and eco-friendly transportation, our categories are designed to offer something for everyone. Explore our collection and find exactly what you’re looking for. "
                : "اكتشف مجموعة واسعة من المنتجات عالية الجودة المصممة لتلبية احتياجاتك. من حلول التكنولوجيا المبتكرة إلى أثاث المنزل الأنيق ووسائل النقل الصديقة للبيئة، تم تصميم أقسامنا لتقديم شيء للجميع. استكشف مجموعتنا واعثر على ما تبحث عنه بالضبط. "}
            </p>
          </div>
          {/* Card Start */}

          <div class="row g-4">
            {dataArray.map((prd, idx) => (
              <div
                class="col-lg-6 col-lg-6 col-xl-4 wow fadeInUp "
                data-wow-delay={`${idx / 5}s`}
              >
                <div class="training-item">
                  <div class="training-inner " style={{ height: "20rem" }}>
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
                    <a href="#">
                      <h4 class="text-white">{prd.title}</h4>
                    </a>
                    <p class="text-white-50">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem, veritatis.
                    </p>
                    <a
                      class="btn btn-secondary rounded-pill text-white p-0"
                      // href="#"
                      onClick={()=>{
                        navigate(`${prd.title.toLowerCase().split(" ").join("-")}`), scroll(0,0)
                      }}
                    >
                      Explore More{" "}
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
    </>
  );
};

export default Category;
