import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Banner from "../common/Banner";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookShareCount,
  InstapaperIcon,
  InstapaperShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { useDirection } from "../../context/DirectionContext";

const SingleProduct = () => {
  const images = [
    {
      original: "/images/sprd-1.webp",
      thumbnail: "/images/sprd-1.webp",
      originalWidth: 600, // Custom width for original
      originalHeight: 600, // Custom height for original
      thumbnailWidth: 100, // Custom width for thumbnail
      thumbnailHeight: 100, // Custom height for thumbnail
      loading: "eager",
    },
    {
      original: "/images/sprd-2.webp",
      thumbnail: "/images/sprd-2.webp",
      originalWidth: 600, // Custom width for original
      originalHeight: 600, // Custom height for original
      thumbnailWidth: 100, // Custom width for thumbnail
      thumbnailHeight: 100, // Custom height for thumbnail
      loading: "eager",
    },
    {
      original: "/images/sprd-3.webp",
      thumbnail: "/images/sprd-3.webp",
      originalWidth: 600, // Custom width for original
      originalHeight: 600, // Custom height for original
      thumbnailWidth: 100, // Custom width for thumbnail
      thumbnailHeight: 100, // Custom height for thumbnail
      loading: "eager",
    },
    {
      original: "/images/sprd-4.webp",
      thumbnail: "/images/sprd-4.webp",
      originalWidth: 600, // Custom width for original
      originalHeight: 600, // Custom height for original
      thumbnailWidth: 100, // Custom width for thumbnail
      thumbnailHeight: 100, // Custom height for thumbnail
      loading: "eager",
    },
    {
      original: "/images/sprd-5.webp",
      thumbnail: "/images/sprd-5.webp",
      originalWidth: 600, // Custom width for original
      originalHeight: 600, // Custom height for original
      thumbnailWidth: 100, // Custom width for thumbnail
      thumbnailHeight: 100, // Custom height for thumbnail
      loading: "eager",
    },
  ];

  const { direction } = useDirection();
  return (
    <>
      <Banner crumbs={"products"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-12 py-5 bg-white p-0">
            <div className="section-title wow fadeInUp">
              <h1 className="text-uppercase pb-3 fw-bolder">
                Money transfer vehicle on German Mercedes 516 Sprinter
              </h1>
              {/* <p className="product-price text-danger fw-bold fs-5">
                Reservation is requested
              </p> */}
            </div>
            <div className="product-images ">
              <ImageGallery
                items={images}
                showPlayButton={false}
                showNav={false}
                showFullscreenButton={false}
              />
            </div>
            <hr />
            <div className="row">
              {/* <p className="product-category">Category: vehicles</p> */}
              <span className="text-center">{direction==="ltr"?"Share via :":"مشاركة عبر :"} </span>
              <div className="social-share-container d-flex justify-content-center gap-2 pt-3">
                <EmailShareButton
                  url={"https://example.com"}
                  title={"Check this out!"}
                >
                  <EmailIcon size={32} round={true} />
                </EmailShareButton>
                <WhatsappShareButton
                  url={"https://example.com"}
                  title={"Check this out!"}
                >
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
                <FacebookMessengerShareButton
                  url={"https://example.com"}
                  title={"Check this out!"}
                >
                  <FacebookMessengerIcon size={32} round={true} />
                </FacebookMessengerShareButton>
                <TelegramShareButton
                  url={"https://example.com"}
                  title={"Check this out!"}
                >
                  <TelegramIcon size={32} round={true} />
                </TelegramShareButton>
                <LineShareButton
                  url={"https://example.com"}
                  title={"Check this out!"}
                >
                  <LineIcon size={32} round={true} />
                </LineShareButton>
                <ViberShareButton
                  url={"https://example.com"}
                  title={"Check this out!"}
                >
                  <ViberIcon size={32} round={true} />
                </ViberShareButton>
                <FacebookShareButton
                  url={"https://example.com"}
                  title={"Check this out!"}
                >
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <TwitterShareButton
                  url={"https://example.com"}
                  title={"Check this out!"}
                >
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <LinkedinShareButton
                  url={"https://example.com"}
                  title={"Check this out!"}
                >
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-12">
            <div className="product-detail-container text-left">
              <div className="container mt-4 p-0">
                <h1 className="text-left pb-4 wow fadeInUp">Specifications</h1>
                <div className="card mb-4 wow fadeInUp rounded-0 rounded-0 bg-white">
                  <div className="card-header">
                    <h5 className="text-primary">Chassis</h5>
                  </div>
                  <div className="card-body">
                    <p>
                      <strong>Model:</strong> AT380T44H (4x6) EURO3
                    </p>
                  </div>
                </div>

                <div className="card mb-4 wow fadeInUp rounded-0 bg-white">
                  <div className="card-header">
                    <h5 className="text-primary">Engine</h5>
                  </div>
                  <div className="card-body">
                    <p>
                      <strong>Type:</strong> Heavy duty diesel engine IVECO
                      CURSOR 13
                    </p>
                    <p>
                      <strong>Number of cylinders:</strong> 6 cylinders / 24
                      valves / 4 stroke
                    </p>
                    <p>
                      <strong>Power:</strong> 440 hp at 1900 rpm
                    </p>
                  </div>
                </div>

                <div className="card mb-4 wow fadeInUp rounded-0 bg-white">
                  <div className="card-header">
                    <h5 className="text-primary">Maximum Load</h5>
                  </div>
                  <div className="card-body">
                    <p>
                      <strong>Maximum load:</strong> 34 tons
                    </p>
                  </div>
                </div>

                <div className="card mb-4 wow fadeInUp rounded-0 bg-white">
                  <div className="card-header">
                    <h5 className="text-primary">Water Tank</h5>
                  </div>
                  <div className="card-body">
                    <p>
                      <strong>Capacity:</strong> 15000 liters
                    </p>
                    <p>
                      <strong>Material:</strong> High quality stainless steel
                      (L316 Steel Stainless)
                    </p>
                    <p>
                      <strong>Thickness:</strong> Not less than 4 mm
                    </p>
                    <ul>
                      <li>
                        The tank body is rust-resistant and is not affected by
                        salt or fresh water or humidity.
                      </li>
                      <li>
                        The outer surface of the water tank and the connections
                        are treated with anti-corrosion paints and coatings that
                        are resistant to the effect of salt water.
                      </li>
                      <li>The welds are coated with epoxy or similar.</li>
                    </ul>
                  </div>
                </div>

                <div className="card mb-4 wow fadeInUp rounded-0 bg-white">
                  <div className="card-header">
                    <h5 className="text-primary">Pump and Tank Cabin</h5>
                  </div>
                  <div className="card-body">
                    <p>
                      <strong>Cabin:</strong> Closed, roofed, and single unit,
                      manufactured by IVECO, without any modification (STANDARD
                      SINGLE DEEP CABIN).
                    </p>
                    <p>
                      <strong>Pump Performance:</strong>
                    </p>
                    <ul>
                      <li>
                        Medium pressure discharge: More than 3000 liters/minute
                        at a pressure of 10 bar
                      </li>
                      <li>
                        High pressure discharge: 400 liters/minute at a pressure
                        of 40 bar
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <hr /> */}
              {/* <div className="row g-4 pb-5">
                <div className="col-12">
                  <a
                    className="btn btn-primary border-secondary rounded-0 text-white py-3 px-5 d-flex gap-2 justify-content-center align-items-center wow fadeInUp"
                    href="mailto:your-email@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Email Us
                    <MdEmail size={24} />
                  </a>
                </div>
                <div className="col-12">
                  <a
                    className="btn btn-primary border-secondary rounded-0 text-white py-3 px-5 d-flex gap-2 justify-content-center align-items-center wow fadeInUp"
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message Us on WhatsApp
                    <IoLogoWhatsapp size={24} />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div class="product-detail-container">
        <div class="container">
          <div class="product-images mt-5">
            <div class="main-product-image">
              <img
                src="img/kader-car.jpg"
                alt="Product Image"
                class="img-fluid"
                id="currentImage"
              />
            </div>
            <div class="image-thumbnails mt-3">
              <img
                src="img/kader-car.jpg"
                alt="Thumbnail 1"
                class="img-thumbnail"
                onclick="changeImage('img/kader-car.jpg')"
              />
              <img
                src="img/kader-car2.jpg"
                alt="Thumbnail 2"
                class="img-thumbnail"
                onclick="changeImage('img/kader-car2.jpg')"
              />
              <img
                src="img/kader-car3.png"
                alt="Thumbnail 3"
                class="img-thumbnail"
                onclick="changeImage('img/kader-car3.png')"
              />
              <img
                src="img/ambulance.jpg"
                alt="Thumbnail 4"
                class="img-thumbnail"
                onclick="changeImage('img/ambulance.jpg')"
              />
            </div>
          </div>

          <div class="product-details">
            <h1>Kader-Car</h1>
            <p class="product-category">Category: vehicles</p>
            <p class="product-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia ipsum ut leo euismod, nec posuere justo efficitur. Morbi
              vel bibendum arcu. Suspendisse potenti.
            </p>

            <ul class="product-features">
              <li>
                <strong>Feature 1:</strong> High-quality material
              </li>
              <li>
                <strong>Feature 2:</strong> Lightweight and portable
              </li>
              <li>
                <strong>Feature 3:</strong> Long-lasting battery
              </li>
              <li>
                <strong>Feature 4:</strong> Water-resistant
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SingleProduct;
