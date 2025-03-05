import React from "react";
import Banner from "../common/Banner";
import { useDirection } from "../../context/DirectionContext";

const About = () => {
  const dataArray = [
    {
      title: "A Vision for Global Leadership",
      subTitle: "Our Vision",
      paragraph:
        "To become a global leader in industrial and technological innovation, recognized for our ability to drive sustainable development and deliver cutting-edge solutions that shape the future of Egypt, the Arab world, and beyond.",
      url: "/images/news-1.webp",
    },
    {
      title: "Driving Excellence and Innovation",
      subTitle: "Our Goal",
      paragraph:
        "To deliver high-quality, innovative solutions that meet the needs of our clients and partners. We aim to exceed expectations by leveraging our expertise, advanced technology, and commitment to excellence in every project we undertake.",
      url: "/images/news-2.webp",
    },
    {
      title: "Guided by Integrity and Collaboration",
      subTitle: "Our Values",
      paragraph:
        "We are committed to operating with integrity, fostering innovation, and achieving excellence in all our endeavors. Through collaboration and teamwork, we strive to build lasting partnerships and create a positive impact on society.",
      url: "/images/news-3.webp",
    },
  ];
  const dataArrayAr = [
    {
      title: "رؤية للريادة العالمية",
      subTitle: "رؤيتنا",
      paragraph:
        "أن نصبح روادًا عالميين في الابتكار الصناعي والتكنولوجي، معترفًا بنا لقدرتنا على دفع عجلة التنمية المستدامة وتقديم حلول متطورة تشكل مستقبل مصر والعالم العربي وما بعده.",
      url: "/images/news-1.webp",
    },
    {
      title: "قيادة التميز والابتكار",
      subTitle: "هدفنا",
      paragraph:
        "تقديم حلول عالية الجودة ومبتكرة تلبي احتياجات عملائنا وشركائنا. نهدف إلى تجاوز التوقعات من خلال الاستفادة من خبراتنا وتكنولوجيتنا المتقدمة والتزامنا بالتميز في كل مشروع نقوم به.",
      url: "/images/news-2.webp",
    },
    {
      title: "نحو النزاهة والتعاون",
      subTitle: "قيمنا",
      paragraph:
        "نحن ملتزمون بالعمل بنزاهة، وتعزيز الابتكار، وتحقيق التميز في جميع مساعينا. من خلال التعاون والعمل الجماعي، نسعى لبناء شراكات دائمة وإحداث تأثير إيجابي على المجتمع.",
      url: "/images/news-3.webp",
    },
  ];
  const dataMainArrayAr =[ {
    title: "نحن مصنع موثوق به ومعتمد من الهيئة العربية للتصنيع",
    subTitle: "عن مصنع قادر",
    text: "في مصنع قادر، نفخر بعقود من الخبرة والابتكار في مجال التصنيع. كمصنع موثوق به ومعتمد من الهيئة العامة للتنظيم والفحص (AOI)، نحن ملتزمون بتقديم منتجات وحلول عالية الجودة تلبي المعايير العالمية. تفانينا في التميز ورضا العملاء جعلنا روادًا في مجالنا. ",

  }]
  const dataMainArray = [{
    title: "We’re Trusted Factory Affiliated with AOI",
    subTitle: "About KADER",
    text: "At KADER, we pride ourselves on decades of expertise and innovation in manufacturing. As a trusted factory affiliated with the Authority of Organization and Inspection (AOI), we are committed to delivering high-quality products and solutions that meet global standards. Our dedication to excellence and customer satisfaction has made us a leader in our industry.  ",
  }]

  const { direction } = useDirection();
  return (
    <>
      <Banner crumbs={direction==="ltr"?"about us":"من نحن"} />
      {/* Main Block */}
      <div class="container-fluid overflow-hidden py-5 bg-white">
        <div class="container py-5">
          <div class="row g-5">
            <div class={`col-xl-5 wow ${direction==="ltr"?"fadeInRight":"fadeInLeft"}`} data-wow-delay="0.1s">
              <div
                class="bg-light rounded"
                style={{ height: "100%", width: "100%" }}
              >
                <img
                  src="/images/about.webp"
                  class="img-fluid w-100"
                  style={{
                    marginBottom: "-7px",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  alt="Image"
                />
                {/* <!-- <img src="img/about-3.jpg" class="img-fluid w-100 border-bottom border-5 border-primary" style="border-top-right-radius: 300px; border-top-left-radius: 300px;" alt="Image"> --> */}
              </div>
            </div>
            <div class={`col-xl-7 wow ${direction==="ltr"?"fadeInRight":"fadeInLeft"}`} data-wow-delay="0.3s">
              <h5 class="sub-title p-3">{direction==="ltr"? dataMainArray[0].subTitle:dataMainArrayAr[0].subTitle}</h5>
              <h1 class="display-5 mb-4">
              {direction==="ltr"? dataMainArray[0].title:dataMainArrayAr[0].title}
              </h1>
              <p class="mb-4">
              {direction==="ltr"? dataMainArray[0].text:dataMainArrayAr[0].text}
              </p>
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
                  {/* <!-- <div class="mb-5">
                                    <p class="text-primary h6 mb-3"><i class="fa fa-check-circle text-secondary m-2"></i> Offer 100 % Genuine Assistance</p>
                                    <p class="text-primary h6 mb-3"><i class="fa fa-check-circle text-secondary m-2"></i> It’s Faster & Reliable Execution</p>
                                    <p class="text-primary h6 mb-3"><i class="fa fa-check-circle text-secondary m-2"></i> Accurate & Expert Advice</p>
                                </div> --> */}
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
                        class="text-secondary fw-bold fs-5"
                        style={{ letterSpacing: "2px" }}
                      >
                        call: +0123 456 7890
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {(direction==="ltr"?dataArray:dataArrayAr).map((block, index) => {
        if (index % 2 === 0) {
          // Even index: First dev type
          return (
            <div className="container-fluid overflow-hidden py-5" key={index}>
              <div className="container py-5">
                <div className="row g-5">
                  <div
                    className={`col-xl-7 wow ${direction==="ltr"?"fadeInLeft":"fadeInRight"}`} 
                    data-wow-delay="0.3s"
                  >
                    <h5 className="sub-title p-3">{block.subTitle}</h5>
                    <h1 className="display-5 mb-4">{block.title}</h1>
                    <p className="mb-4">{block.paragraph}</p>
                  </div>
                  <div
                    className={`col-xl-5 wow ${direction==="ltr"?"fadeInLeft":"fadeInRight"}`}
                    data-wow-delay="0.1s"
                  >
                    <div
                      className="bg-light rounded"
                      style={{ height: "100%", width: "100%" }}
                    >
                      <img
                        src={block.url}
                        className="img-fluid w-100"
                        style={{
                          marginBottom: "-7px",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        alt="Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          // Odd index: Second dev type
          return (
            <div
              className="container-fluid overflow-hidden py-5 bg-white"
              key={index}
            >
              <div className="container py-5">
                <div className="row g-5">
                  <div
                    className={`col-xl-5 wow ${direction==="ltr"?"fadeInRight":"fadeInLeft"}`}
                    data-wow-delay="0.1s"
                  >
                    <div
                      className="bg-light rounded"
                      style={{ height: "100%", width: "100%" }}
                    >
                      <img
                        src={block.url}
                        className="img-fluid w-100"
                        style={{
                          marginBottom: "-7px",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div
                    className={`col-xl-7 wow ${direction==="ltr"?"fadeInRight":"fadeInLeft"}`} 
                    data-wow-delay="0.3s"
                  >
                    <h5 className="sub-title p-3">{block.subTitle}</h5>
                    <h1 className="display-5 mb-4">{block.title}</h1>
                    <p className="mb-4">{block.paragraph}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}

      {/* counter products start */}
      <div class="container-fluid counter-facts bg-white py-5">
        <div class="container py-5">
          <div class="row g-4">
            <div
              class="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div class="counter">
                <div class="counter-icon">
                  <i class="fas fa-passport"></i>
                </div>
                <div class="counter-content">
                  <h3>technological centers</h3>
                  <div class="d-flex align-items-center justify-content-center">
                    <span class="counter-value" data-toggle="counter-up">
                      31
                    </span>
                    {/* <!-- <h4 class="text-secondary mb-0" style="font-weight: 600; font-size: 25px;">+</h4> --> */}
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div class="counter">
                <div class="counter-icon">
                  <i class="fas fa-users"></i>
                </div>
                <div class="counter-content">
                  <h3>firefighting cars</h3>
                  <div class="d-flex align-items-center justify-content-center">
                    <span class="counter-value" data-toggle="counter-up">
                      11
                    </span>
                    {/* <!-- <h4 class="text-secondary mb-0" style="font-weight: 600; font-size: 25px;">+</h4> --> */}
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div class="counter">
                <div class="counter-icon">
                  <i class="fas fa-user-check"></i>
                </div>
                <div class="counter-content">
                  <h3> home furniture</h3>
                  <div class="d-flex align-items-center justify-content-center">
                    <span class="counter-value" data-toggle="counter-up">
                      13
                    </span>
                    {/* <!-- <h4 class="text-secondary mb-0" style="font-weight: 600; font-size: 25px;">K</h4> --> */}
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div class="counter">
                <div class="counter-icon">
                  <i class="fas fa-handshake"></i>
                </div>
                <div class="counter-content">
                  <h3> office furniture</h3>
                  <div class="d-flex align-items-center justify-content-center">
                    <span class="counter-value" data-toggle="counter-up">
                      20
                    </span>
                    {/* <!-- <h4 class="text-secondary mb-0" style="font-weight: 600; font-size: 25px;">%</h4> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* counter products end */}
    </>
  );
};

export default About;
