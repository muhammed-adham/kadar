import React, { useState } from "react";
import { useDirection } from "../../context/DirectionContext";
import OverlayModal from "./OverlayModal";
import { Link } from "react-router";

const News = () => {
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
      url: "./src/assets/images/news-1.webp",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "./src/assets/images/news-2.webp",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "./src/assets/images/news-5.webp",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "./src/assets/images/news-4.webp",
    },
  ];

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
      <div class="container-fluid training overflow-hidden pb-5 bg-white">
        <div class="container py-5">
          <div class="office pt-5">
            <div
              class="section-title text-center mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div class="sub-style">
                <h5 class="sub-title text-primary px-3">
                  {direction === "ltr" ? "news" : "أحدث الأخبار"}
                </h5>
              </div>
              <h1 class="display-5 mb-4">
                {direction === "ltr"
                  ? "Here is our latest news"
                  : "إليكم أحدث أخبارنا"}
              </h1>
              <p className="mb-0">
                {direction === "ltr"
                  ? "Stay updated with the latest developments, announcements, and insights from our team. From exciting new projects to industry trends and success stories, our news section keeps you informed about everything happening in our world. Explore our updates and discover how we’re making an impact.  "
                  : "ابقوا على اطلاع بآخر التطورات والإعلانات والرؤى من فريقنا. من المشاريع الجديدة المثيرة إلى اتجاهات الصناعة وقصص النجاح، يبقيكم قسم الأخبار لدينا على علم بكل ما يحدث في عالمنا. اكتشفوا آخر تحديثاتنا وتعرفوا على كيفية صنعنا للتأثير."}
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
                          handleShow(prd);
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
                to="/news"
                onClick={()=>scroll(0,0)}
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

export default News;
