import React, { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

const RadioBoxFilter = ({
  title,
  subcategories,
  onFilter,
  showFilters,
  setShowFilters,
  filteredSubcategory,
}) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(subcategories);

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
    onFilter(subcategory);
  };

  console.log(filteredSubcategory);

  return (
    <>
      <div
        className="mb-4 d-flex flex-column align-items-start gap-3 position-relative start-0  border-black h-100 bg-white"
        style={{
          width: "18rem",
          backgroundColor: "#f8f9fa",
          // borderRadius: "0.5rem",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <button
          className={` align-self-end transition-transform btn btn-secondary ${
            showFilters ? "translate-x-0" : "-translate-x-full"
          } wow fadeInLeft`}
          style={{ zIndex: "1000", right: "-1rem", top: "-.5rem" }}
          onClick={() => setShowFilters(false)}
        >
          <IoCloseCircleSharp className="fs-1" />{" "}
        </button>
        <h2 className="h5 text-capitalize px-3 text-primary">{title}</h2>
        <div className="form-group">
          {subcategories.map((subcat) => (
            <div className="form-check text-capitalize px-5" key={subcat}>
              <input
                className="form-check-input"
                type="radio"
                name="subcategory"
                id={subcat}
                value={subcat}
                checked={
                  filteredSubcategory === subcat || ""
                }
                onChange={() => handleSubcategoryChange(subcat)}
              />
              <label className="form-check-label px-2" htmlFor={subcat}>
                {subcat}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RadioBoxFilter;
