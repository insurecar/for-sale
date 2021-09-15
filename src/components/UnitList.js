import { h } from "preact";
import { t } from "ttag";
import Gallery from "./Gallery/index";

import UnitInformation from "./UnitInformation";

const UnitList = ({ galleryImages = [] }) => {
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
      {/* ! S__T__A__R__T____G___A___L___L___E___R___Y */}
      <div className="supper">
        <Gallery galleryImages={galleryImages} />
      </div>
      {/* S__T__A__R__T____G___A___L___L___E___R___Y */}
    </div>
  );
};

export default UnitList;
