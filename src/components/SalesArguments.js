import { h } from "preact";
import { t } from "ttag";
import Gallery from "./Gallery/index";
import { useEffect, useState } from "preact/compat";
import classnames from "classnames";

const SalesArguments = ({
  salesTitle,
  salesText,
  salesRightTitle,
  salesRightBottom,
  salesPerson,
  salesName,
  salesJob,
  salesPhone,
  salesMobile,
  salesAddress,
}) => {
  const [isActive, setIsActive] = useState(false);
  const classNamePopUp = classnames("sales__content-right-popup", {
    "sales__content-right-hide": !isActive,
  });

  const handleClickForm = (e) => {
    e.preventDefault();
    setIsActive(false);
  };
  return (
    <div className="sales-content">
      <div className="sales">
        <div
          className="sales__title"
          dangerouslySetInnerHTML={{ __html: salesTitle }}
        ></div>
        <div className="sales__border"></div>
        <div className="sales__content">
          <div className="sales__content-left">
            <div className="sales__content-left-text">{salesText}</div>
            <div className="sales__content-left-button">
              <button>Read More</button>
            </div>
          </div>
          <div className="sales__content-right">
            <div className="sales__content-right-header">{salesRightTitle}</div>
            <div className="sales__content-right-main">
              <div className="sales__content-right-main-photo">
                <img src={salesPerson} alt={salesPerson} />
              </div>
              <div className="sales__content-right-main-data">
                <div className="sales__content-right-main-data-name">
                  {salesName}
                </div>
                <div className="sales__content-right-main-data-job">
                  {salesJob}
                </div>
                <div className="sales__content-right-main-data-phone">
                  Phone: <span>{salesPhone}</span>
                </div>
                <div className="sales__content-right-main-data-mobile">
                  Mobile: <span>{salesMobile}</span>
                </div>
                <div
                  className="sales__content-right-main-data-address"
                  dangerouslySetInnerHTML={{ __html: salesAddress }}
                ></div>
              </div>
            </div>
            <div
              className="sales__content-right-footer"
              onClick={() => setIsActive((prev) => !prev)}
            >
              {salesRightBottom}
            </div>
            {/* <div className="sales__content-right-popup sales__content-right-hide"> */}
            <div className={classNamePopUp}>
              {/* S___T___A___R___T   */}
              <div className="form__box">
                <div className="form">
                  <div className="form__agent">
                    <div className="form__agent-header">
                      <div className="form__agent-header-left">
                        {salesRightBottom}
                      </div>
                      <div
                        className="form__agent-header-right form__agent-header-right-close"
                        onClick={() => setIsActive(false)}
                      ></div>
                    </div>
                    <div className="form__agent-main">{salesRightTitle}</div>
                    <div className="form__agent-footer">
                      <div className="form__agent-footer-photo">
                        <img src={salesPerson} alt="salesPerson" />
                      </div>
                      <div className="form__agent-footer-data">
                        <div className="form__agent-footer-data-name">
                          {salesName}
                        </div>
                        <div className="form__agent-footer-data-job">
                          {salesJob}
                        </div>
                        <div className="form__agent-footer-data-phone">
                          Phone: <span>{salesPhone}</span>
                        </div>
                        <div className="form__agent-footer-data-mobile">
                          Mobile: <span>{salesMobile}</span>
                        </div>
                        <div
                          className="form__agent-footer-data-address"
                          dangerouslySetInnerHTML={{ __html: salesAddress }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <form className="form__action">
                    <div className="form__action-title">
                      BOOK A FREE VALUATION
                    </div>
                    <div className="form__action-name">
                      <input type="text" placeholder="Your Name*" />
                    </div>
                    <div className="form__action-email">
                      <input type="text" placeholder="Your Email*" />
                    </div>
                    <div className="form__action-number">
                      <input type="text" placeholder="Your Number*" />
                    </div>
                    <div className="form__action-textarea">
                      <textarea></textarea>
                    </div>
                    <div className="form__action-captcha">
                      <div className="form__action-captcha-text">
                        This site is protected by reCAPTCHA and the Google{" "}
                        <span>Privacy Policy</span>
                        and <span>Terms of Service</span>.
                      </div>
                      <div className="form__action-captcha-required">
                        *Required
                      </div>
                    </div>
                    <div className="form__action-button">
                      <button onClick={handleClickForm}>SEND REQUEST</button>
                    </div>
                  </form>
                </div>
              </div>
              {/* F__I__N__I__S__H */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesArguments;
