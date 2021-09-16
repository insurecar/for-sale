import { useEffect, useState } from "preact/compat";
import classnames from "classnames";

const AgentDescription = ({
  salesName,
  agentDescriptionText,
  salesPerson,
  agentDescriptionContact,
  salesRightTitle,
  salesRightBottom,
  salesJob,
  salesPhone,
  salesMobile,
  salesAddress,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveMobile, setIsActiveMobile] = useState(false);

  const classNamePopup = classnames("agent__description-wrapper-popup", {
    "agent__description-wrapper-popup-show": isActive,
  });

  const classNamePopupMobile = classnames("agent__description-mobile-popup", {
    "agent__description-mobile-popup-show": isActiveMobile,
  });

  return (
    <div className="agent__description-wrapper">
      <button
        onClick={() => setIsActive((prev) => !prev)}
        className="agent__description-wrapper-button"
      >
        {agentDescriptionContact}
      </button>
      <div className={classNamePopup}>
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
                  <div className="form__agent-footer-data-job">{salesJob}</div>
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
              <div className="form__action-title">BOOK A FREE VALUATION</div>
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
                <div className="form__action-captcha-required">*Required</div>
              </div>
              <div className="form__action-button">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsActive(false);
                  }}
                >
                  SEND REQUEST
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="agent__description">
        <div className="agent__description-photo">
          <img src={salesPerson} alt="worker" />
        </div>
        <div className="agent__description-info">
          <div className="agent__description-info-name">
            <div className="agent__description-info-name-worker">
              {salesName}
            </div>
            <div className="agent__description-info-name-job">{salesJob}</div>
            <div className="agent__description-info-name-border"></div>
          </div>
          <div className="agent__description-info-text">
            {agentDescriptionText}
          </div>
          <div className="agent__description-info-button">
            <button>BOOK A VIEWING</button>
          </div>
        </div>
      </div>
      <div className="agent__description-mobile">
        <button
          onClick={() => setIsActiveMobile((prev) => !prev)}
          className="agent__description-mobile-button"
        >
          {agentDescriptionContact}
        </button>
        <div className={classNamePopupMobile}>
          <div className="form__box">
            <div className="form">
              <div className="form__agent">
                <div className="form__agent-header">
                  <div className="form__agent-header-left">
                    {salesRightBottom}
                  </div>
                  <div
                    className="form__agent-header-right form__agent-header-right-close"
                    onClick={() => setIsActiveMobile(false)}
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
                <div className="form__action-title">BOOK A FREE VALUATION</div>
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
                  <div className="form__action-captcha-required">*Required</div>
                </div>
                <div className="form__action-button">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsActiveMobile(false);
                    }}
                  >
                    SEND REQUEST
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="agent__description-mobile-worker">
          <div className="agent__description-mobile-worker-name">
            {salesName}
          </div>
          <div className="agent__description-mobile-worker-job">{salesJob}</div>
        </div>
        <div className="agent__description-mobile-photo">
          <img src={salesPerson} alt="worker" />
        </div>
        <div className="agent__description-mobile-text">
          <div className="agent__description-mobile-text-desc">
            {agentDescriptionText}
          </div>
          <div className="agent__description-mobile-text-button">
            <button>BOOK A VIEWING</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDescription;
