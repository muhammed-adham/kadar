import React, { useState } from "react";
import Banner from "../common/Banner";
import Paginate from "../common/Paginate";
import OverlayModal from "../common/OverlayModal";
import { useDirection } from "../../context/DirectionContext";

const News = () => {
  const dataArray = [
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus primis pulvinar interdum suscipit mattis; magnis sollicitudin per. Sit porta dapibus venenatis fames gravida conubia nisl lacinia pharetra. Morbi in bibendum fermentum ipsum adipiscing fusce dui taciti. Dignissim cursus ex viverra rutrum; habitasse accumsan consequat porta. Nulla dignissim habitasse vulputate tincidunt hendrerit nibh leo netus. Aenean aliquet sapien egestas metus, erat ridiculus. Dapibus fames sapien amet neque proin ultricies. Semper nam quis urna odio bibendum turpis. Non porta vestibulum massa vel malesuada vitae condimentum cubilia. Platea est quam per bibendum iaculis nibh; ac justo. Neque ipsum purus convallis ut lacinia orci morbi. Netus eleifend neque posuere egestas semper nibh ridiculus eros. Urna montes integer inceptos curabitur fusce proin porta accumsan. Nam vitae condimentum, hac velit tincidunt sodales tempus. Blandit varius et accumsan, aptent diam convallis turpis commodo. Quisque varius posuere mi consectetur morbi. Rhoncus ipsum nunc donec pharetra nam varius augue ac. Sociosqu tempus maximus, nullam rhoncus porttitor tristique fermentum torquent. Adipiscing rhoncus dictumst finibus taciti justo porta augue ullamcorper. Proin urna at penatibus magnis taciti ex. Diam ridiculus erat dis hac faucibus massa. Hac pretium donec sollicitudin fermentum purus. Egestas venenatis cubilia habitant, lacus maecenas id fringilla. Nisl habitant massa feugiat natoque maximus. Orci in potenti eros penatibus cursus. Risus auctor ex ultricies quam consequat diam. Curae lobortis duis scelerisque porttitor magna ultricies feugiat etiam. Curabitur porta id lobortis id odio risus! Ligula taciti fringilla lacinia, sollicitudin nullam condimentum. Commodo habitasse blandit taciti purus laoreet vestibulum felis. Litora taciti eleifend ac donec sagittis. Magna varius donec eget vel diam euismod. Suspendisse at condimentum cursus maecenas eget venenatis malesuada erat orci?",
      url: "/images/news-5.webp",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "/images/news-6.webp",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "/images/news-7.webp",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "/images/news-8.webp",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "/images/news-9.webp",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "/images/news-1.webp",
    },
  ];

  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleShow = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const { direction } = useDirection();

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
      <Banner crumbs={direction === "ltr" ? "news" : "آخر الأخبار"} />
      <div class="container-fluid training overflow-hidden py-5">
        <div class="container py-5">
          <div
            class="section-title text-left mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="sub-style">
              <h5 class="sub-title text-primary px-3">
                {direction === "ltr" ? "News" : "الأخبار"}
              </h5>
            </div>
            <h1 class="display-5 mb-4">
              {direction === "ltr"
                ? "Stay Informed on the Latest Updates"
                : "ابق على اطلاع بأحدث المستجدات"}
            </h1>
            <p class="mb-0">
              {direction === "ltr"
                ? "Stay up-to-date with our latest news and developments across various fields. This page highlights our most recent achievements, projects, and innovations, all delivered with precision and efficiency. We take pride in our ability to implement solutions in record time while maintaining the highest standards of quality and accuracy."
                : "ابق على اطلاع بآخر الأخبار والتطورات لدينا في مختلف المجالات. تعرض هذه الصفحة أبرز إنجازاتنا ومشاريعنا وابتكاراتنا الحديثة، والتي تم تنفيذها بدقة وكفاءة. نفخر بقدرتنا على تنفيذ الحلول في وقت قياسي مع الحفاظ على أعلى معايير الجودة والدقة."}
            </p>
          </div>

          {/* Card Start */}

          <div class="row g-4">
            {dataArray.map((prd, idx) => (
              <div
                key={idx}
                class="col-lg-6 col-lg-6 col-xl-6 wow fadeInUp "
                data-wow-delay="0.1s"
              >
                <div class="training-item">
                  <div class="training-inner " style={{ height: "24rem" }}>
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
                      <a class="h4 text-white mb-0">IELTS Coaching</a>
                    </div>
                  </div>
                  <div class="training-content bg-secondary rounded-bottom p-4">
                    <a>
                      <h4 class="text-white">IELTS Coaching</h4>
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
                    >
                      Read More
                      <i
                        class={`fas fa-arrow-${
                          direction === "ltr" ? "right" : "left"
                        } px-2`}
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

export default News;
