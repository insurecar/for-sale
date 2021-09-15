import { h } from "preact";
import { useEffect, useState, useRef } from "preact/compat";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import { Formik, Field } from "formik";

import PrivacyDeclaration from "./PrivacyDeclaration";
import PdfIcon from "./PdfIcon";
import PhoneInput from "./PhoneInput";
import validationSchema from "./validationSchema";
import getQueryParams from "../../getQueryParams";

const Form = ({
  salesRightTitle,
  salesRightBottom,
  salesPerson,
  salesName,
  salesJob,
  salesPhone,
  salesMobile,
  salesAddress,
}) => {
  return (
    <div className="form__box">
      <div className="form">
        <div className="form__agent">
          <div className="form__agent-header">{salesRightBottom}</div>
          <div className="form__agent-main">{salesRightTitle}</div>
          <div className="form__agent-footer">
            <div className="form__agent-footer-photo">
              <img src={salesPerson} alt="salesPerson" />
            </div>
            <div className="form__agent-footer-data">
              <div className="form__agent-footer-data-name">{salesName}</div>
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
            <button>SEND REQUEST</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
