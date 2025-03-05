import React, { useState } from "react";
import Banner from "../common/Banner";
import { FaRegCirclePlay } from "react-icons/fa6";
import YouTubeVideo from "../common/YoutubeVideo";
import Paginate from "../common/Paginate";
import OverlayModal from "../common/OverlayModal";
import { useDirection } from "../../context/DirectionContext";

const Videos = () => {
  const dataArray = [
    {
      videoID: "dY3t90L_q3Q",
      videoTitle: "مصنع قادر للصناعات المتطورة - الهيئة العربية للتصنيع",
      videoDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
    },
    {
      videoID: "pOWKt8p-GYY",
      videoTitle:
        "الكونتينر | مصنع قادر لتصنيع المدرعات والسيارات المجهزة والمعدات الثقيلة قصة فخر لكل مصري",
      videoDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
    },
    {
      videoID: "e65Q-NrK-dc",
      videoTitle:
        "لواء أركان حرب عمرو عبد العزيز رئيس مجلس إدارة مصنع قادر يوضح أهم وأبرز المنتجات في المصنع",
      videoDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
    },
    {
      videoID: "ftV6GKQyKw4",
      videoTitle: "تصنيع قطع غيار محركات الطائرات في مصر",
      videoDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
    },
    {
      videoID: "7iEtc19nQNs",
      videoTitle:
        "جولة داخل مصنع الإلكترونيات التابع للهيئة العربية للتصنيع مع اللواء أ.ح مهندس / أحمد عبد العزيز",
      videoDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
    },
    {
      videoID: "Nz6c3zAtDDg",
      videoTitle: "الهيئة العربية للتصنيع. نسخة الفيلم باللغة العربية",
      videoDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
    },
    {
      videoID: "pKFod1gJflk",
      videoTitle:
        "مداخلة ر م إ مصنع قادر لموقع الوطن بشأن موضوع الإسكوتر الكهربائي إنتاج الهيئة العربية للتصنيع",
      videoDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
    },
    {
      videoID: "WmRxceCn7MU",
      videoTitle: "مصنع قادر للصناعات المتطورة - التابع للهيئة العربية للتصنيع",
      videoDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
    },
    {
      videoID: "3ZxtQTsN0tE",
      videoTitle:
        "الأخبار نجاح الهيئة العربية للتصنيع في إنتاج الإسطمبات الخشبية للأوتوبيسات",
      videoDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
    },
    {
      videoID: "oovmi47l3gk",
      videoTitle: "مصنع المحركات - الهيئة العربية للتصنيع",
      videoDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
    },
    {
      videoID: "IdsEPlzhtXc",
      videoTitle:
        "الهيئة العربية للتصنيع توقع بروتوكول تعاون مع أحدى الشركات السعودية لتوطين تكنولوجيا النانو",
      videoDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
    },
    {
      videoID: "0BRS844L1c4",
      videoTitle: "مصنع صقر للصناعات المتطورة",
      videoDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
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
        title={selectedItem?.videoTitle}
        description={selectedItem?.videoDesc}
        videoID={selectedItem?.videoID}
        mediaType="video"
      />
      <Banner crumbs={direction==="ltr"? "Video-Library":"معرض الفيديوهات"} />
      <div class="container-fluid country overflow-hidden py-5">
        <div class="container">
          <div
            class="section-title text-center wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ marginBottom: "70px" }}
          >
            <div class="sub-style">
              <h5 class="sub-title text-primary px-3">
                {direction === "ltr" ? "Video Gallery" : "معرض الفيديو"}
              </h5>
            </div>
            <h1 class="display-5 mb-4">
              {direction === "ltr"
                ? "Explore Our Visual Content"
                : "استكشف محتوانا المرئي"}
            </h1>
            <p class="mb-0">
              {direction === "ltr"
                ? "Welcome to our video gallery, where we showcase the precision, discipline, and innovation that define our operations. From tactical demonstrations and mission highlights to equipment showcases and training exercises, our visual content provides an in-depth look at our capabilities and commitment to excellence. Explore our videos to gain a deeper understanding of our mission and values.  "
                : "مرحبًا بكم في معرض الفيديو الخاص بنا، حيث نعرض الدقة والانضباط والابتكار التي تميز عملياتنا. من العروض التكتيكية وأبرز المهام إلى عروض المعدات وتمارين التدريب، يقدم محتوانا المرئي نظرة متعمقة على قدراتنا والتزامنا بالتميز. استكشف الفيديوهات لفهم أعمق لرسالتنا وقيمنا. "}
            </p>
          </div>
          <div class="row g-5 text-center">
            {dataArray.map((el, idx) => (
              <div
                key={idx}
                class="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp"
                data-wow-delay="0.1s"
                onClick={() => {
                  handleShow(el);
                }}
              >
                <div class="country-item">
                  <div
                    class="rounded overflow-hidden"
                    style={{ height: "10.125rem" }}
                  >
                    <YouTubeVideo videoID={el.videoID} />
                  </div>
                  <div class="country-flag">
                    <img
                      src={"./src/assets/images/youtube.png"}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      class="img-fluid rounded-circle"
                      alt="Image"
                    />
                  </div>
                  <div class="country-name">
                    <a href="#" class="text-white fs-4">
                      <FaRegCirclePlay className="fs-1" />
                      {/* {el.videoTitle} */}
                    </a>
                  </div>
                </div>
                <p className="fw-bold">{el.videoTitle}</p>
              </div>
            ))}

            {/* <div class="col-12">
              <a
                class="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp"
                data-wow-delay="0.1s"
                href="#"
              >
                More Countries
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <Paginate />
    </>
  );
};

export default Videos;
