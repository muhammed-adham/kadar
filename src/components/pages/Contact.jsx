import React from "react";
import Banner from "../common/Banner";
import { useDirection } from "../../context/DirectionContext";

const Contact = () => {
  const { direction } = useDirection();
  return (
    <>
      <Banner crumbs={direction==="ltr"?"Contact us":"اتصل بنا"} />
      <div class="container-fluid contact overflow-hidden py-5">
        <div class="container py-5">
          <div class="row g-5 mb-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="sub-style">
                <h5 class="sub-title text-primary p-3">
                  {direction === "ltr" ? "Quick Contact" : "اتصل بنا"}
                </h5>
              </div>
              <h1 class="display-5 mb-4">
                {direction === "ltr"
                  ? "Have Questions? Don't Hesitate to Contact Us"
                  : "هل لديك أسئلة؟ لا تتردد في التواصل معنا"}
              </h1>
              <p class="mb-5">
                {direction === "ltr"
                  ? "We’re here to assist you with any inquiries or support you may need. Whether you have questions about our services, products, or operations, our team is ready to provide the information and assistance you require. Reach out to us today, and let’s start the conversation."
                  : "نحن هنا لمساعدتك في أي استفسارات أو دعم قد تحتاجه. سواء كانت لديك أسئلة حول خدماتنا أو منتجاتنا أو عملياتنا، فإن فريقنا جاهز لتقديم المعلومات والمساعدة التي تحتاجها. تواصل معنا اليوم، ولنبدأ الحوار."}
              </p>
              <div class="d-flex border-bottom mb-4 pb-4">
                <i class="fas fa-map-marked-alt fa-4x text-primary px-3 rounded"></i>
                <div class="ps-3">
                  <h5>{direction === "ltr" ? "Location" : "الموقع"}</h5>
                  <p>
                    {direction === "ltr"
                      ? "2 El Tayaran St, Al Golf, Nasr City, Cairo Governorate 4451110, Egypt"
                      : "2 شارع الطياران، الجولف، مدينة نصر، محافظة القاهرة 4451110، مصر "}
                  </p>
                </div>
              </div>
              <div class="row g-3">
                <div class="col-xl-6">
                  <div class="d-flex">
                    <i class="fas fa-tty fa-3x text-primary px-3"></i>
                    <div class="ps-3">
                      <h5 class="mb-3">{direction === "ltr" ? "Quick Contact" : "اتصل بنا"}</h5>
                      <div class="mb-3">
                        <h6 class="mb-0">{direction === "ltr" ? "Phone" : "الهاتف"}</h6>
                        <a
                          href="https://wa.me/201030009248"
                          target="_blank"
                          class="fs-5 text-primary"
                          dir="ltr"
                        >
                          +2010 3000 9248
                        </a>
                      </div>
                      <div class="mb-3">
                        <h6 class="mb-0">{direction === "ltr" ? "Email" : "البريد الإلكتروني"}</h6>
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
                    <i class="fas fa-clone fa-3x text-primary px-3"></i>
                    <div class="ps-3">
                      <h5 class="mb-3">{direction === "ltr" ? "Opening Hrs" : "ساعات العمل"}</h5>
                      <div class="mb-3">
                        <h6 class="mb-0">{direction === "ltr" ? "Sun - Thursday" : "الأحد - الخميس"}</h6>
                        <a href="#" class="fs-5 text-primary">
                        {direction === "ltr" ? "07.30 am to 03.30 pm" : "07.30 ص الي 03.30 م"}
                        </a>
                      </div>
                      {/* <div class="mb-3">
                        <h6 class="mb-0">Satday:</h6>
                        <a href="#" class="fs-5 text-primary">
                          10.00 am to 05.00 pm
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center pt-3">
                <div class="m-4">
                  <div
                    class="bg-light d-flex align-items-center justify-content-center"
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "10px",
                    }}
                  >
                    <i class="fas fa-share fa-3x text-primary" style={direction==="rtl"?{transform:"scaleX(-1)"}:null}></i>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <a
                    class="btn btn-secondary mx-1 fs-4"
                    href="https://www.facebook.com/kader.factory.eg/"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a
                    class="btn btn-secondary mx-1 fs-4"
                    href="https://www.youtube.com/@kaderfactory8960"
                    target="_blank"
                  >
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a
                    class="btn btn-secondary mx-1 fs-4"
                    href="https://www.instagram.com/kader_factory_official/?igsh=MTltaHNyaXcyNDczeQ%3D%3D#"
                    target="_blank"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3">
              <div class="sub-style">
                <h5 class="sub-title text-primary p-3">
                  {direction === "ltr" ? "Let’s Connect" : "لنتواصل"}
                </h5>
              </div>
              <h1 class="display-5 mb-4">
                {direction === "ltr" ? "Send Your Message" : "اترك رسالة"}
              </h1>
              <p class="mb-3">
                {direction === "ltr"
                  ? "We value collaboration and communication. Whether you’re a partner, ally, or part of our community, we’re here to connect with you. Reach out to us for inquiries, partnerships, or to learn more about our mission and operations. Together, we can achieve excellence and strengthen our shared goals."
                  : "نحن نقدّر التعاون والاتصال. سواء كنت شريكًا أو حليفًا أو جزءًا من مجتمعنا، نحن هنا للتواصل معك. تواصل معنا للاستفسارات أو الشراكات أو لمعرفة المزيد عن مهمتنا وعملياتنا. معًا، يمكننا تحقيق التميز وتعزيز أهدافنا المشتركة."}
                {/* <a
                  class="text-primary fw-bold"
                  href="https://htmlcodex.com/contact-form"
                >
                  Download Now
                </a> */}
              </p>
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
                        for="name"
                      >
                        {direction === "ltr" ? "Your Name" : "الأسم"}
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
                        for="email"
                      >
                        {direction === "ltr"
                          ? "Your Email"
                          : "البريد الالكتروني"}
                      </label>
                    </div>
                  </div>
                  {/* <div class="col-lg-12 col-xl-6">
                    <div class="form-floating">
                      <input
                        type="phone"
                        class="form-control rounded-0"
                        id="phone"
                        placeholder="Phone"
                      />
                      <label for="phone">Your Phone</label>
                    </div>
                  </div> */}
                  {/* <div class="col-lg-12 col-xl-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control rounded-0"
                        id="project"
                        placeholder="Project"
                      />
                      <label for="project">Your Project</label>
                    </div>
                  </div> */}
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
                        for="subject"
                      >
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
          <div class="office pt-5">
            <div class="row g-4 justify-content-center">
              <div class="col-12 pt-5 wow zoomIn" data-wow-delay="0.1s">
                <div class="rounded h-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1726.2533249816152!2d31.31804038889666!3d30.07967296942901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f17819003bd%3A0x5788391b0502453f!2sKader%20Factory%20For%20Developed%20Industries!5e0!3m2!1sen!2sus!4v1739862992920!5m2!1sen!2sus"
                    class="rounded w-100"
                    style={{ height: "500px" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
