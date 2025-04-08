import React from "react";

const OverlayModal = ({
  show,
  handleClose,
  title,
  description,
  videoID,
  mediaType,
  imgSrc,
}) => {
  if (!show) return null; // Don't render if not shown

  return (
    <div className="overlay" onClick={handleClose}>
      <div
        className="overlay-content d-flex flex-column justify-content-center gap-5 p-xl-5 bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn btn btn-primary rounded-circle p-2"
        style={{width:"3rem", height:"3rem"}}
        onClick={handleClose}
          // style={{width:"2rem", height:"2rem"}}
        >
          ✖
          {/* <i class="fa bi-x fs-3"></i> */}
        </button>
        <div className="row w-100 h-100 m-auto g-2 ">
          <div
            className={`col-12 col-md-12 col-lg-6 ${
              window.innerWidth > 768 ? "h-100" : ""
            } `}
          >
            {mediaType === "image" ? (
              <img
                src={imgSrc}
                alt={title}
                className="img-fluid"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1`}
                title={title}
                // frameBorder="0"
                allowFullScreen
                className="img-fluid h-100 " // Add h-50 for half height
              ></iframe>
            )}
          </div>
          <div className="col-12 col-lg-6 overlay-header px-4">
            <h2 className="text-white py-2">
              {title}
            </h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayModal;
