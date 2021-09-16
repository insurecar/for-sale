import { h } from "preact";
import { t } from "ttag";

import UnitInformation from "./UnitInformation";
import { useEffect } from "preact/compat";
import Glide from "@glidejs/glide";

import Transformer from "./Gallery/Transformer";

const UnitList = ({ galleryImages = [] }) => {
  useEffect(() => {
    var glideHero = new Glide(".hero", {
      type: "carousel",
      animationDuration: 700,
      autoplay: 6000,
      focusAt: "1",
      startAt: 3,
      perView: 1,
    });
    glideHero.mount();
  });

  return (
    <div className="unit__wrapper">
      <div className="unit__wrapper-border"></div>
      <div className="unit">
        <div className="unit__left">
          <div className="unit__left-top">
            <div className="unit__left-top-small">
              <img src={galleryImages[5].large} alt="photo" />
            </div>
            <div className="unit__left-top-big">
              <img src={galleryImages[4].large} alt="photo" />
            </div>
          </div>
          <div className="unit__left-bottom">
            <div className="unit__left-bottom-big">
              <img src={galleryImages[2].large} alt="photo" />
            </div>
            <div className="unit__left-bottom-small">
              <img src={galleryImages[1].large} alt="photo" />
            </div>
          </div>
        </div>
        <div className="unit__right">
          <div className="unit__right-top">
            <img src={galleryImages[3].large} alt="photo" />
          </div>
          <div className="unit__right-bottom">
            <img src={galleryImages[0].large} alt="photo" />
          </div>
        </div>
      </div>
      <div className="unit__slider">
        <div className="wrap__glide">
          <div class="glide hero">
            <div class="glide__track" data-glide-el="track">
              <div class="glide__slides">
                {galleryImages.map(({ large }) => (
                  <div class="glide__slide">
                    <img src={large} />
                  </div>
                ))}
              </div>
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
          </div>
        </div>
        <div className="unit__bottom">
          <div className="unit__bottom-left">
            <img src={galleryImages[4].large} alt="photo" />
          </div>
          <div className="unit__bottom-right">
            <img src={galleryImages[5].large} alt="photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitList;
