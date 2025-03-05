import React, { useEffect, useState } from "react";
import { useDirection } from "../../context/DirectionContext";

const Slider = () => {
  const { direction } = useDirection();
  const [activeIndex, setActiveIndex] = useState(0);



  const dataArray = [
    {
      title: "Technology Centers",
      subTitle: "Diverse Industries, Unified Excellence",
      text: "Explore our state-of-the-art technology centers, equipped with cutting-edge tools and innovations. Designed to support businesses in staying ahead in the digital age, our centers provide the perfect environment for growth and innovation.",
      url: "./src/assets/images/b-1.jpg",
    },
    {
      title: "Home Furniture",
      subTitle: "Diverse Industries, Unified Excellence",
      text: "Transform your living spaces with our premium home furniture collection. From modern sofas to elegant dining sets, we offer stylish, functional, and comfortable solutions for every home.",
      url: "./src/assets/images/prd-3.webp",
    },
    {
      title: "Electronic Motorbikes",
      subTitle: "Diverse Industries, Unified Excellence",
      text: "Discover our range of eco-friendly electronic motorbikes, designed for efficiency, performance, and sustainability. Perfect for urban commuting, our bikes combine innovation with style.",
      url: "./src/assets/images/b-2.jpg",
    },
  ];

  const dataArrayAr = [
    {
      title: "مراكز التكنولوجيا",
      subTitle: "صناعات متنوعة، تميز موحد",
      text: "اكتشف مراكز التكنولوجيا الحديثة لدينا والمجهزة بأحدث الأدوات والابتكارات. مصممة لدعم الشركات في البقاء في المقدمة في العصر الرقمي، توفر مراكزنا البيئة المثالية للنمو والابتكار.",
      url: "./src/assets/images/b-1.jpg",
    },
    {
      title: "أثاث المنزل",
      subTitle: "صناعات متنوعة، تميز موحد",
      text: "حوّل مساحات معيشتك مع مجموعة أثاث المنزل الفاخرة لدينا. من الأرائك العصرية إلى طقم غرف الطعام الأنيقة، نقدم حلولاً أنيقة وعملية ومريحة لكل منزل.",
      url: "./src/assets/images/prd-3.webp",
    },
    {
      title: "المركبات الإلكترونية",
      subTitle: "صناعات متنوعة، تميز موحد",
      text: "اكتشف مجموعة المركبات الإلكترونية الصديقة للبيئة، المصممة للكفاءة والأداء والاستدامة. مثالية للتنقل الحضري، تجمع مركباتنا بين الابتكار والأناقة.",
      url: "./src/assets/images/b-2.jpg",
    },
  ];

  const items = direction === "ltr" ? dataArray : dataArrayAr;

  useEffect(() => {
    const interval = setInterval(() => {
        activeIndex>=items?
      setActiveIndex((prevIndex) => (prevIndex + 1)): setActiveIndex(0)
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [items.length]);

  return (
    <>
      <div class="carousel-header">
        <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
          <ol class="carousel-indicators">
            {items.map((el,idx)=>(
                <li
                key={idx}
                data-bs-target="#carouselId"
                data-bs-slide-to={idx}
                class={idx===activeIndex?"active":null}
              ></li>
            ))}
          </ol>
          <div class="carousel-inner" role="listbox">
            {(direction === "ltr" ? dataArray : dataArrayAr).map((el, idx) => (
              <div key={idx} className={`carousel-item ${idx === activeIndex  ? 'active' : null}`}>
                <img
                  src={el.url}
                  class="img-fluid"
                  alt="Image"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
                <div class="carousel-caption">
                  <div class="text-center p-4" style={{ maxWidth: "900px" }}>
                    <h4
                      class="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      {el.subTitle}
                    </h4>
                    <h1
                      class="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      {el.title}
                      {/* Immigration Process Starts Here! */}
                    </h1>
                    <p
                      class="text-white mb-4 mb-md-5 fs-5 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      {el.text}
                    </p>
                    <a
                      class="btn btn-primary border-secondary  text-white py-3 px-5 wow fadeInUp rounded-0"
                      data-wow-delay="0.7s"
                      href="#"
                    >
                     {direction==="ltr"?"More Details":"المزيد من التفاصيل"} 
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {/* <div class="carousel-item active">
              <img
                src="./src/assets/images/b-2.jpg"
                class="img-fluid"
                alt="Image"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
              <div class="carousel-caption">
                <div class="text-center p-4" style={{ maxWidth: "900px" }}>
                  <h4
                    class="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    Diverse Industries, Unified Excellence
                  </h4>
                  <h1
                    class="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    Immigration Process Starts Here!
                  </h1>
                  <p
                    class="text-white mb-4 mb-md-5 fs-5 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <a
                    class="btn btn-primary border-secondary  text-white py-3 px-5 wow fadeInUp rounded-0"
                    data-wow-delay="0.7s"
                    href="#"
                  >
                    More Details
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="./src/assets/images/b-1.jpg"
                class="img-fluid"
                alt="Image"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
              <div class="carousel-caption">
                <div class="text-center p-4" style={{ maxWidth: "900px" }}>
                  <h5
                    class="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    Diverse Industries, Unified Excellence
                  </h5>
                  <h1
                    class="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    Best Visa Immigrations Services
                  </h1>
                  <p
                    class="text-white mb-4 mb-md-5 fs-5 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <a
                    class="btn btn-primary border-secondary  text-white py-3 px-5 wow fadeInUp rounded-0"
                    data-wow-delay="0.7s"
                    href="#"
                  >
                    More Details
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="./src/assets/images/prd-3.webp"
                class="img-fluid"
                alt="Image"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
              <div class="carousel-caption">
                <div class="text-center p-4" style={{ maxWidth: "900px" }}>
                  <h5
                    class="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp "
                    data-wow-delay="0.1s"
                  >
                    Diverse Industries, Unified Excellence
                  </h5>
                  <h1
                    class="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    Best Visa Immigrations Services
                  </h1>
                  <p
                    class="text-white mb-4 mb-md-5 fs-5 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <a
                    class="btn btn-primary border-secondary  text-white py-3 px-5 wow fadeInUp rounded-0"
                    data-wow-delay="0.7s"
                    href="#"
                  >
                    More Details
                  </a>
                </div>
              </div>
            </div> */}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bg-secondary wow fadeInLeft"
              data-wow-delay="0.2s"
              aria-hidden="false"
            ></span>
            <span class="visually-hidden-focusable">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bg-secondary wow fadeInRight"
              data-wow-delay="0.2s"
              aria-hidden="false"
            ></span>
            <span class="visually-hidden-focusable">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
