import { h } from "preact";
import { t } from "ttag";

const Info = ({
  galleryImages,
  squareBgMobile,
  sliderBottom1,
  sliderBottom2,
  sliderBottom3,
  sliderBottom4,
  sliderBottom5,
  sliderBottom8,
  sliderBottom9,
}) => {
  return (
    <div className="info">
      <img className="info__background" src={galleryImages[2].large} />
      <div className="info__square">
        <img className="info__square-img" src={squareBgMobile} alt="square" />
        <span className="info__square-text">For Sale</span>
      </div>
      <div className="info__bottom">
        <div className="info__bottom-left">{sliderBottom1}</div>
        <div className="info__bottom-right">
          <div className="info__bottom-right-sq">
            <div className="info__bottom-right-sq-text">{sliderBottom2}</div>
            <div className="info__bottom-right-sq-count">{sliderBottom3}</div>
          </div>
          <div className="info__bottom-right-bedrooms">
            <div className="info__bottom-right-bedrooms-text">
              {sliderBottom4}
            </div>
            <div className="info__bottom-right-bedrooms-count">
              {sliderBottom5}
            </div>
          </div>
          <div className="info__bottom-right-price">
            <div className="info__bottom-right-price-text">{sliderBottom8}</div>
            <div className="info__bottom-right-price-count">
              {sliderBottom9}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
