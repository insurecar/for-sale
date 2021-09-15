import { h } from "preact";
import { useState, useEffect } from "preact/compat";
import Glide from "@glidejs/glide";

import Transformer from "./Transformer";

const Gallery = ({
  galleryImages = [],
  squareBgDesktop,
  sliderBottom1,
  sliderBottom2,
  sliderBottom3,
  sliderBottom4,
  sliderBottom5,
  sliderBottom6,
  sliderBottom7,
  sliderBottom8,
  sliderBottom9,
}) => {
  useEffect(() => {
    if (galleryImages.length === 0) return;

    const glide = new Glide(".glide", {
      autoplay: 6000,
      hoverpause: true,
      keyboard: true,
      type: "carousel",
      animationDuration: 900,
      animationTimingFunc: "linear",
      perView: 1,
      // peek: 180,
      // breakpoints: {
      //   1200: {
      //     peek: 130,
      //     gap: 120,
      //   },
      //   901: {
      //     perView: 1,
      //     gap: 100,
      //     peek: 0,
      //   },
      // },
    }).mount({ Transformer });

    return () => glide.destroy();
  });

  if (galleryImages.length === 0) return null;

  // Removes any dead image references from the API
  const filteredGalleryImages = galleryImages.filter(
    (obj) => obj.large !== null
  );

  return (
    <div className="gallery-container">
      <div class="gallery-container__for-sale">For Sale</div>
      <div class="gallery-container__square">
        <img src={squareBgDesktop} alt={squareBgDesktop} />
      </div>
      <div className="glide" id="gallery">
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides">
            {filteredGalleryImages.map((src, idx) => (
              <img key={idx} className="glide__img" src={src.large} />
            ))}
          </div>
          <div className="glide__arrows" data-glide-el="controls">
            <div
              className="glide__arrow glide__arrow--prev"
              data-glide-dir="&lt;"
            >
              <i
                className="fa fa-angle-left glide__arrow-icon"
                aria-hidden="true"
              />
            </div>
            <div
              className="glide__arrow glide__arrow--next"
              data-glide-dir="&gt;"
            >
              <i
                className="fa fa-angle-right glide__arrow-icon"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="glide__bullets" data-glide-el="controls[nav]">
            {filteredGalleryImages.map((_src, idx) => (
              <div
                key={idx}
                className="glide__bullet"
                data-glide-dir={`=${idx}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="gallery-container__bottom">
        <div className="gallery-container__bottom-left">{sliderBottom1}</div>
        <div className="gallery-container__bottom-right">
          <div className="gallery-container__bottom-right-square">
            <div className="gallery-container__bottom-right-square-text">
              {sliderBottom2}
            </div>
            <div className="gallery-container__bottom-right-square-count">
              {sliderBottom3}
            </div>
          </div>
          <div className="gallery-container__bottom-right-bedrooms">
            <div className="gallery-container__bottom-right-bedrooms-text">
              {sliderBottom4}
            </div>
            <div className="gallery-container__bottom-right-bedrooms-count">
              {sliderBottom5}
            </div>
          </div>
          <div className="gallery-container__bottom-right-baths">
            <div className="gallery-container__bottom-right-baths-text">
              {sliderBottom6}
            </div>
            <div className="gallery-container__bottom-right-baths-count">
              {sliderBottom7}
            </div>
          </div>
          <div className="gallery-container__bottom-right-price">
            <div className="gallery-container__bottom-right-price-text">
              {sliderBottom8}
            </div>
            <div className="gallery-container__bottom-right-price-count">
              {sliderBottom9}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
