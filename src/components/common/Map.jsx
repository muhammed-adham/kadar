import React from "react";
import { useDirection } from "../../context/DirectionContext";

const Map = () => {
  const { direction } = useDirection();
  return (
    <>
      <div class="container-fluid contact overflow-hidden py-5 bg-white">
        <div class="container py-5">
          <div class="row g-5 ">
            <div
              class="section-title text-center my-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div class="sub-style">
                <h5 class="sub-title text-primary px-3">{direction==="ltr"?"Contact us":"تواصل معنا"}</h5>
              </div>
              <h1 class="display-5 mb-4">{direction==="ltr"?"How can we help you?!":"كيف يمكننا مساعدتك؟!"}</h1>
              <p className="mb-0">
            {direction === "ltr"
                  ? "We’re here to assist you with any questions, concerns, or inquiries you may have. Whether you’re looking for more information about our services, need support, or want to explore collaboration opportunities, our team is ready to help. Reach out to us today."
                  : "نحن هنا لمساعدتك في أي استفسارات أو أسئلة أو استشارات قد تكون لديك. سواء كنت تبحث عن مزيد من المعلومات حول خدماتنا، أو تحتاج إلى دعم، أو ترغب في استكشاف فرص التعاون، فإن فريقنا جاهز لمساعدتك. تواصل معنا اليوم."}
            </p>
            </div>

            <div class="col-lg-6 wow fadeInUp h-100" data-wow-delay="0.1s">
              {/* <h4 class="text-secondary text-left mb-4">Our Location</h4> */}
              {/* <p>2 El Tayaran St, Al Golf, Nasr City, Cairo Governorate 4451110, Egypt</p> */}
              <div class="col-11 wow zoomIn" data-wow-delay="0.1s">
                <div class="rounded-0 h-100">
                  <iframe
                    class="rounded-0 w-100"
                    style={{ height: "22rem" }}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1726.2533249816152!2d31.31804038889666!3d30.07967296942901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f17819003bd%3A0x5788391b0502453f!2sKader%20Factory%20For%20Developed%20Industries!5e0!3m2!1sen!2sus!4v1739862992920!5m2!1sen!2sus"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Contact Details */}
                <div class="row g-3 pt-3">
                  <h5 class="pt-3">
                    {direction === "ltr"
                      ? "Contact Details"
                      : "معلومات الاتصال"}
                  </h5>
                  <div class="col-xl-6">
                    <div class="d-flex">
                      {/* <i class="fas fa-tty fa-3x text-primary"></i> */}
                      <div class="">
                        <div class="mb-3">
                          <h6 class="mb-0">
                            {" "}
                            {direction === "ltr"
                              ? "Phone Number"
                              : "رقم الهاتف"}
                            :
                          </h6>
                          <a
                            href="tel:+201030009248"
                            target="_blank"
                            class="fs-5 text-primary"
                          >
                            <span dir="ltr">+20 10 3000 9248</span>
                          </a>
                        </div>
                        <div class="mb-3">
                          <h6 class="mb-0">
                            {" "}
                            {direction === "ltr"
                              ? "Email Address"
                              : "البريد الإلكتروني"}
                            :
                          </h6>
                          <a
                            href="mailto:marketing@kader-factory.com"
                            class="fs-5 text-primary"
                          >
                            marketing@kader-factory.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="d-flex">
                      <div class="">
                        <div class="mb-3">
                          <h6 class="mb-0">
                            {" "}
                            {direction === "ltr" ? "Address" : "العنوان"}:
                          </h6>
                          <a href="#" class="fs-5 text-primary">
                            {direction === "ltr"
                              ? "2 El Tayaran St, Al Golf, Nasr City, Cairo Governorate 4451110, Egypt"
                              : "2 شارع الطيران، الجولف، مدينة نصر، محافظة القاهرة 4451110، مصر"}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-lg-6 wow fadeInUp shadow p-5"
              data-wow-delay="0.3s"
            >
              <div class="sub-style">
                {/* <h5 class="sub-title text-primary pe-3">Contact Us</h5> */}
              </div>
              <h1 class="display-6 mb-4">
                {direction === "ltr" ? "Leave A Message" : "اترك رسالة"}
              </h1>
              <form>
                <div class="row g-4">
                  <div class="col-lg-12 col-xl-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control rounded-0"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label
                        style={direction === "rtl" ? { right: "0" } : null}
                        for="name">
                        {direction === "ltr" ? "Your Name" : "الاسم"}{" "}
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-12 col-xl-6">
                    <div class="form-floating">
                      <input
                        type="email"
                        class="form-control rounded-0"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label
                        style={direction === "rtl" ? { right: "0" } : null}
                        for="email">
                        {direction === "ltr"
                          ? "Your Email"
                          : "البريد الالكتروني"}
                      </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control rounded-0"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label
                        style={direction === "rtl" ? { right: "0" } : null}
                        for="subject">
                        {direction === "ltr" ? "Subject" : "الموضوع"}
                      </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <textarea
                        class="form-control rounded-0"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "160px" }}
                      ></textarea>
                      <label
                        style={direction === "rtl" ? { right: "0" } : null}
                        for="message"
                      >
                        {direction === "ltr" ? "Message" : "الرسالة"}
                      </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary w-100 py-3 rounded-0">
                      {direction === "ltr" ? "Send Message" : "إرسال"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
