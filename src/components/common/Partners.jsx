import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/bundle";
// Import Swiper autoplay module
import { Autoplay, FreeMode } from "swiper/modules";
import { useDirection } from "../../context/DirectionContext";

const Partners = () => {
  const { direction } = useDirection(); // Get the current direction

  

  const partners = [
    "/images/prtnr-1.webp",
    "/images/prtnr-2.webp",
    "/images/prtnr-3.webp",
    "/images/prtnr-7.webp",
    "/images/prtnr-4.webp",
    "/images/prtnr-5.webp",
    "/images/prtnr-6.webp",
  ];
  return (
    <>
      <div className="container-fluid testimonial overflow-hidden pt-5 bg-white">
        <div className="container py-5">
          <div
            className="section-title text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="sub-style">
              <h5 className="sub-title text-primary px-3">{direction==="ltr"?"our partners":"شركاؤنا"}</h5>
            </div>
            {/* <h1 className="display-5 mb-4">What Our Clients Say</h1> */}
            <p className="mb-0">
            {direction === "ltr"
                  ? "We are proud to collaborate with industry leaders and innovative organizations that share our vision and commitment to excellence. Our partners play a vital role in helping us deliver exceptional solutions and services to our clients. Together, we strive to create meaningful impact and drive success across industries."
                  : "نفخر بالتعاون مع رواد الصناعة والمنظمات المبتكرة التي تشاركنا رؤيتنا والتزامنا بالتميز. يلعب شركاؤنا دورًا حيويًا في مساعدتنا على تقديم حلول وخدمات استثنائية لعملائنا. معًا، نسعى لخلق تأثير ذي معنى ودفع عجلة النجاح عبر مختلف الصناعات."}
            </p>
          </div>
          <Swiper
           dir="ltr"
            style={{ height: "8rem" }}
            className="wow fadeInUp"
            spaceBetween={50}
            slidesPerView={4}
            loop={true} // Enable infinite loop
            freeMode={true} // Enable free mode for smooth, non-stop swiping
            autoplay={{
              delay: 0, // No delay between slides
              disableOnInteraction: false, // Continue autoplay after user interaction
              pauseOnMouseEnter: true, // Pause autoplay on mouse enter
              reverseDirection: direction==='rtl', // Add this line to reverse autoplay
            }}
            speed={3000} // Adjust speed for smooth transition
            // touchRatio={0.1} // Lower touch ratio for slower swipe motion
            // touchAngle={90} // Adjust angle for swipe sensitivity
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay, FreeMode]} // Add the Autoplay module here
          >

            {partners.map((src,idx)=>(
                          <SwiperSlide key={idx}>
                          <div className="testimonial-item">
                            <div className="d-flex">
                              <div
                                className="me-0 "
                                style={{height: "5rem", width:"24rem"}}
                              >
                                <img
                                  className="img-fluid"
                                  src={src}
                                  alt="img"
                                  style={{height:"100%", width:"100%", objectFit:"contain"}}
                                />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partners;
