import React, { useState } from "react";
import { useDirection } from "../../context/DirectionContext";

const QuickFilter = ({ categories, onFilter }) => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabChange = (category) => {
    setActiveTab(category);
    onFilter(category === "All" ? "" : category);
  };

  const { direction } = useDirection();

  return (
    <>
      <div className="mb-5 col-lg-6 col-xl-12 mx-auto text-center">
        <h2 className="h5  wow fadeInUp text-primary text-uppercase pb-3 text-decoration-underline" data-wow-delay=".6s" style={{textUnderlineOffset:".5rem"}}>
          {direction==="ltr"?"Filter by Category":"أختيار حسب القسم "}
        </h2>
        <ul
          className="nav nav-tabs justify-content-center  wow fadeInUp"
          data-wow-delay=".7s"
        >
          <li className="nav-item">
            <button
              className={`nav-link text-primary ${
                activeTab === "All" ? "active" : ""
              }`}
              onClick={() => handleTabChange("All")}
            >
              All
            </button>
          </li>
          {categories?.map((cat) => (
            <li className="nav-item" key={cat}>
              <button
                className={`nav-link text-capitalize text-primary ${
                  activeTab === cat ? "active" : ""
                }`}
                onClick={() => handleTabChange(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default QuickFilter;
