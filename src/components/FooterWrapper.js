import { h } from "preact";
import { t } from "ttag";

const FooterWrapper = ({ footerCopyright, footerLogo }) => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top-left">
          <div className="footer__top-left-text">View Property</div>
          <div className="footer__top-left-border"></div>
        </div>
        <div className="footer__top-middle">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="footer__top-right">
          <button>BOOK A VIEWING</button>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-left">
          <div className="footer__bottom-left-wrapper">
            <img src={footerLogo} />
          </div>
        </div>
        <div
          className="footer__bottom-right"
          dangerouslySetInnerHTML={{ __html: footerCopyright }}
        ></div>
      </div>
    </div>
  );
};

export default FooterWrapper;
