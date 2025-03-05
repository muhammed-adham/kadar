import React from "react";
import { useDirection } from "../../context/DirectionContext";
import { Link } from "react-router";

const Products = () => {
  const { direction } = useDirection();

  const dataArrayAr = [
    {
      title: "مدرعات النقل",
      desc: "اكتشف مجموعة واسعة من مركبات النقل عالية الجودة المصممة للكفاءة والمتانة والأداء. سواء للاستخدام الشخصي أو التجاري، تم بناء مركباتنا لتلبية احتياجاتك وتجاوز توقعاتك.",
      url: "/images/b-5.jpg",
      buttonText: "استكشف المزيد",
    },
    {
      title: "أثاث المكاتب",
      desc: "حوّل مساحة عملك مع مجموعة أثاث المكاتب الفاخرة لدينا. من الكراسي المريحة إلى المكاتب العصرية، نقدم حلولاً أنيقة وعملية ومريحة لكل بيئة مكتبية.",
      url: "/images/ctg-2.webp",
      buttonText: "استكشف المزيد",
    },
    {
      title: "مراكز التكنولوجيا",
      desc: "اكتشف مراكز التكنولوجيا الحديثة لدينا والمجهزة بأحدث الأدوات والابتكارات. مثالية للشركات التي تتطلع إلى البقاء في المقدمة في العصر الرقمي ودفع عجلة الابتكار.",
      url: "/images/b-7.jpg",
      buttonText: "استكشف المزيد",
    },
  ];

  const dataArray = [
    {
      title: "Transport Vehicles",
      desc: "Explore our wide range of high-quality transport vehicles designed for efficiency, durability, and performance. Whether for personal or commercial use, our vehicles are built to meet your needs and exceed your expectations.",
      url: "/images/b-5.jpg",
      buttonText: "Explore More",
    },
    {
      title: "Office Furniture",
      desc: "Transform your workspace with our premium office furniture collection. From ergonomic chairs to modern desks, we offer stylish, functional, and comfortable solutions for every office environment.",
      url: "/images/ctg-2.webp",
      buttonText: "Explore More",
    },
    {
      title: "Technology Centers",
      desc: "Discover our state-of-the-art technology centers equipped with the latest tools and innovations. Perfect for businesses looking to stay ahead in the digital age and drive innovation.",
      url: "/images/b-7.jpg",
      buttonText: "Explore More",
    },
  ];

  return (
    <>
      <div class="container-fluid service overflow-hidden py-5">
        <div class="container py-5">
          <div
            class="section-title text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="sub-style">
              <h5 class="sub-title text-primary px-3">
                {direction === "ltr" ? "Our Products" : "منتجاتنا"}{" "}
              </h5>
            </div>
            <h1 class="display-5 mb-4">
              {direction === "ltr" ? "Top Products " : "أفضل المنتجات"}
            </h1>
            <p class="mb-0">
              {direction === "ltr"
                ? "Here are some of our best products, available for purchase. If you’re interested in any of these high-quality offerings, feel free to contact us for more details or to place an order."
                : "نقدم لكم بعضًا من أفضل منتجاتنا المتاحة للشراء. إذا كنت مهتمًا بأي من هذه العروض عالية الجودة، فلا تتردد في التواصل معنا للحصول على مزيد من التفاصيل أو لتقديم طلب.!"}
            </p>
          </div>
          <div class="row g-4">
            {(direction === "ltr" ? dataArray : dataArrayAr).map((prd, idx) => (
              <div
                key={idx}
                class="col-lg-6 col-xl-4 wow fadeInUp"
                data-wow-delay={`${idx / 5}s`}
              >
                <div class="service-item">
                  <div class="service-inner">
                    <div class="service-img" style={{ height: "16rem" }}>
                      <img
                        src={prd.url}
                        class="img-fluid w-100 rounded"
                        alt="Image"
                      />
                    </div>
                    <div class="service-title">
                      <div class="service-title-name">
                        <div class="bg-primary text-center rounded-0 p-3 mx-5 mb-4">
                          <a href="#" class="h4 text-white mb-0">
                            {prd.title}
                          </a>
                        </div>
                        <a
                          class="btn bg-white shadow-sm  text-secondary rounded-0 py-3 px-5 mb-4"
                          href="#"
                        >
                          {direction === "ltr"
                            ? "Explore More"
                            : "استكشف المزيد"}
                        </a>
                      </div>
                      <div class="service-content pb-4 bg-primary">
                        <a href="#">
                          <h4 class="text-white mb-4 py-3">{prd.title}</h4>
                        </a>
                        <div class="px-4">
                          <p class="mb-4 text-gray">{prd.desc}</p>
                          <a
                            class="btn btn-primary border-secondary rounded-0 text-white py-3 px-5"
                            href="/single-product"
                          >
                            {direction === "ltr"
                              ? "Explore More"
                              : "استكشف المزيد"}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="col-12 text-center pt-3">
            <Link
              class="btn btn-primary border-secondary rounded-0 py-3 px-5 wow fadeInUp "
              data-wow-delay="0.1s"
              to="/products"
              onClick={()=>scroll(0,0)}
            >
              {direction === "ltr" ? "View All" : "عرض الكل"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
