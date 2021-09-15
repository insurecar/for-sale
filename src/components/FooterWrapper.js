import { h } from "preact";
import { t } from "ttag";

const FooterWrapper = ({ logo }) => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="footer">
          <div>
            <img
              className="footer__logo footer__logo--project"
              src={logo.footer}
            />
          </div>
          <div className = 'footer-last-logo'>
            <a
              href="https://www.eiendomsmegler1.no/kontor/MSHED:16"
              target="_blank"
              rel="nofollow"
            >
              <img
                className="footer__logo footer__logo--company"
                src="../images/logo_EiendomsMegler.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterWrapper;
