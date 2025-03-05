import React, { useEffect, useState } from "react";
import Banner from "../common/Banner";
import ReactPaginate from "react-paginate";
import Paginate from "../common/Paginate";
import QuickFilter from "../common/QuickFilter";
import RadioBoxFilter from "../common/RadioBoxFilter";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useDirection } from "../../context/DirectionContext";
import { useLocation } from "react-router";

const Products = () => {
  const mediumBreakpoint = 768; // Bootstrap's medium breakpoint
  const { direction } = useDirection();


  const dataArray = [
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "../src/assets/images/prd-1.webp",
      category: "home furniture",
      sub_category: "Master Room",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "../src/assets/images/prd-2.webp",
      category: "home furniture",
      sub_category: "Dining Room",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "../src/assets/images/prd-3.webp",
      category: "office furniture",
      sub_category: "hydraulic chairs",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "../src/assets/images/prd-4.webp",
      category: "office furniture",
      sub_category: "Quadruple work cell",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "../src/assets/images/prd-5.webp",
      category: "electric transportation",
      sub_category: "Electric scooter",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "../src/assets/images/prd-6.webp",
      category: "electric transportation",
      sub_category: "Golf Car",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "../src/assets/images/prd-7.webp",
      category: "electric transportation",
      sub_category: "bicycle",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "../src/assets/images/prd-1.webp",
      category: "Plastic Products",
      sub_category: "Home storage drawers",
    },
    {
      title: "Transport Vehicles",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      url: "../src/assets/images/prd-2.webp",
      category: "Plastic Products",
      sub_category: "Plastic jerry can",
    },
  ];

  const dataArrayAr = [
    {
      title: "مركبات النقل",
      desc: "نص بديل لوصف مركبات النقل. يمكنك إضافة وصف مفصل هنا.",
      url: "../src/assets/images/prd-1.webp",
      category: "أثاث المنزل",
      sub_category: "غرفة النوم الرئيسية",
    },
    {
      title: "مركبات النقل",
      desc: "نص بديل لوصف مركبات النقل. يمكنك إضافة وصف مفصل هنا.",
      url: "../src/assets/images/prd-2.webp",
      category: "أثاث المنزل",
      sub_category: "غرفة الطعام",
    },
    {
      title: "مركبات النقل",
      desc: "نص بديل لوصف مركبات النقل. يمكنك إضافة وصف مفصل هنا.",
      url: "../src/assets/images/prd-3.webp",
      category: "أثاث المكاتب",
      sub_category: "كراسي هيدروليكية",
    },
    {
      title: "مركبات النقل",
      desc: "نص بديل لوصف مركبات النقل. يمكنك إضافة وصف مفصل هنا.",
      url: "../src/assets/images/prd-4.webp",
      category: "أثاث المكاتب",
      sub_category: "خلية عمل رباعية",
    },
    {
      title: "مركبات النقل",
      desc: "نص بديل لوصف مركبات النقل. يمكنك إضافة وصف مفصل هنا.",
      url: "../src/assets/images/prd-5.webp",
      category: "وسائل النقل الكهربائية",
      sub_category: "سكوتر كهربائي",
    },
    {
      title: "مركبات النقل",
      desc: "نص بديل لوصف مركبات النقل. يمكنك إضافة وصف مفصل هنا.",
      url: "../src/assets/images/prd-6.webp",
      category: "وسائل النقل الكهربائية",
      sub_category: "عربة الجولف",
    },
    {
      title: "مركبات النقل",
      desc: "نص بديل لوصف مركبات النقل. يمكنك إضافة وصف مفصل هنا.",
      url: "../src/assets/images/prd-7.webp",
      category: "وسائل النقل الكهربائية",
      sub_category: "دراجة هوائية",
    },
    {
      title: "مركبات النقل",
      desc: "نص بديل لوصف مركبات النقل. يمكنك إضافة وصف مفصل هنا.",
      url: "../src/assets/images/prd-1.webp",
      category: "المنتجات البلاستيكية",
      sub_category: "أدراج تخزين منزلية",
    },
    {
      title: "مركبات النقل",
      desc: "نص بديل لوصف مركبات النقل. يمكنك إضافة وصف مفصل هنا.",
      url: "../src/assets/images/prd-2.webp",
      category: "المنتجات البلاستيكية",
      sub_category: "جركن بلاستيك",
    },
  ];

  const products = direction === 'rtl' ? dataArrayAr : dataArray;

  const [filteredProducts, setFilteredProducts] = useState(products);
  const categories = [...new Set(products.map((product) => product.category))];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const handleCategoryFilter = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    filterProducts(selectedCategory, "");
    if (window.innerWidth > mediumBreakpoint) {
      // setShowFilters(selectedCategory && selectedCategory !== "All");
    }
  };

  const handleSubcategoryFilter = (selectedSubcategory) => {
    filterProducts(selectedCategory, selectedSubcategory);
  };

  const filterProducts = (category, subcategory) => {
    let updatedProducts = products;

    if (category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    if (subcategory) {
      updatedProducts = updatedProducts.filter(
        (product) => product.sub_category === subcategory
      );
    }

    setFilteredProducts(updatedProducts);
  };

  const subcategories = selectedCategory
    ? [
        ...new Set(
          products
            .filter((product) => product.category === selectedCategory)
            .map((product) => product.sub_category)
        ),
      ]
    : [];

  const location = useLocation();

  return (
    <>
      <Banner crumbs={direction === "ltr" ? "products" : "المنتجات"} />

      <div className="container-fluid service overflow-hidden py-5">
        <div className="container py-5 ">
          <div
            className="section-title text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="sub-style">
              <h5 className="sub-title text-primary px-3">
                CHECK OUR PRODUCTS
              </h5>
            </div>
            <h1 className="display-5 mb-4 text-capitalize">
              {/* Offer Tailor Made Products That Our Client Requires */}
              {location.state?.data}
            </h1>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              deleniti amet at atque sequi quibusdam cumque itaque repudiandae
              temporibus, eius nam mollitia voluptas maxime veniam
              necessitatibus saepe in ab? Repellat!
            </p>
          </div>

          <QuickFilter
            categories={categories}
            onFilter={handleCategoryFilter}
          />
          <button
            className="btn btn-primary wow fadeInLeft"
            onClick={() => setShowFilters(!showFilters)}
          >
            <i className="fas fa-filter"></i> {/* FontAwesome filter icon */}
          </button>
          {showFilters && (
            <div
              className={`position-absolute top-100 h-50 bg-light border-end transition-transform ${
                showFilters ? "translate-x-0" : "-translate-x-full"
              } wow fadeIn`}
              style={{ width: "250px", zIndex: 1000 }}
            >
              <RadioBoxFilter
                title={
                  !selectedCategory
                    ? "Select a Category"
                    : `Filter By ${selectedCategory}`
                }
                subcategories={subcategories}
                onFilter={handleSubcategoryFilter}
                showFilters={showFilters}
                setShowFilters={setShowFilters}
                filteredSubcategory={
                  filteredProducts.length === 1
                    ? filteredProducts[0].sub_category
                    : ""
                }
              />
            </div>
          )}

          <div className="row g-4">
            {filteredProducts.map((prd, idx) => (
              <div
                className="col-lg-6 col-xl-4 wow fadeInUp"
                data-wow-delay="0.1s"
                key={idx}
              >
                <div className="service-item">
                  <div className="service-inner">
                    <div className="service-img" style={{ height: "16rem" }}>
                      <img
                        src={prd.url}
                        className="img-fluid w-100 rounded"
                        alt="Image"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div className="service-title">
                      <div className="service-title-name">
                        <div className="bg-primary text-center rounded-0 p-3 mx-5 mb-4">
                          <a href="#" className="h4 text-white mb-0">
                            {prd.title}
                          </a>
                        </div>
                        <a
                          className="btn bg-white shadow-sm text-secondary rounded-0 py-3 px-5 mb-4"
                          href="#"
                        >
                          {direction === "ltr"
                            ? "Explore More"
                            : "استكشف المزيد"}
                        </a>
                      </div>
                      <div className="service-content pb-4 bg-primary">
                        <a href="#">
                          <h4 className="text-white mb-4 py-3">{prd.title}</h4>
                        </a>
                        <div className="px-4">
                          <p className="mb-4 text-gray">{prd.desc}</p>
                          <a
                            className="btn btn-primary border-secondary rounded-0 text-white py-3 px-5"
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
        </div>
      </div>
      <Paginate />
    </>
  );
};

export default Products;
