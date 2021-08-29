import React, { Component } from "react";
import stylecss from "./Payment.module.css";
import { NavLink } from "react-router-dom";
import paypal from "../images/paypal.svg";
import mastercard from "../images/mastercard.svg";
import visa from "../images/visa.svg";

class Payment extends Component {
  render() {
    return (
      <>
        <section className={stylecss.s1payment}>
          <NavLink to="/booking">
            <p className={stylecss.p1payment}>&#8592;CONFIRM & PAY</p>
          </NavLink>
        </section>
        <section className={stylecss.s2payment}>
          <p className={stylecss.p2payment}>Personal Information</p>
          <input
            id={stylecss.firstnamepay}
            type="text"
            placeholder="First Name"
          />
          <input
            id={stylecss.lastnamepay}
            type="text"
            placeholder="Last Name"
          />
          <input id={stylecss.emailpay} type="email" placeholder="Email" />
          <input id={stylecss.phonepay} type="tel" placeholder="Phone Number" />
          <input id={stylecss.addresspay} type="text" placeholder="Address" />
          <input
            id={stylecss.postalcodepay}
            type="text"
            placeholder="Postal Code"
          />
          <input id={stylecss.citypay} type="text" placeholder="City" />
          <input id={stylecss.countrypay} type="text" placeholder="Country" />
        </section>
        <section className={stylecss.s3payment}>
          <p className={stylecss.p3payment}>Pay with</p>
          <input
            id={stylecss.creditcardpay}
            type="text"
            placeholder="Credit or Debit card"
          />
          <input id={stylecss.cardnumber} type="text" placeholder="Card Number" />
          <input id={stylecss.expiration} type="text" placeholder="Expiration" />
          <input id={stylecss.ccv} type="text" placeholder="CCV" />
          <input id={stylecss.zipcode} type="text" placeholder="Zip Code" />
          <input id={stylecss.countrypay1} type="text" placeholder="Country" />
        </section>
        <section className={stylecss.s4payment}>
        <p className={stylecss.p4payment}>Additional information</p>
        <input type="text" placeholder="Leave a message" id={stylecss.txtarea1}/>
        <input type="checkbox" id={stylecss.check1payment}/>
        <p className={stylecss.p5payment}>I have read and accept<strong>Terms & Conditions</strong></p>
        <input type="submit" id={stylecss.inpsubpay} value="CONFIRM & PAY"/>
        </section>
        <footer>
          <p className={stylecss.footersp}>TERMS AND CONDITIONS</p>
          <p className={stylecss.footersp2}>CENCELLATION POLICY</p>
          <p className={stylecss.footersp3}>PRIVACY POLICY</p>
          <img
            src={paypal}
            className={stylecss.paypal}
            alt="Paypal"
            width="50px"
            height="50px"
          />
          <img
            src={mastercard}
            className={stylecss.mastercard}
            alt="Mastercard"
            width="50px"
            height="50px"
          />
          <img
            src={visa}
            className={stylecss.visa}
            alt="visa"
            width="50px"
            height="50px"
          />
          <img
            src="https://shop.sembenini.it/img/cms/bank-transfer-logo-on-black.png"
            className={stylecss.banktransfer}
            alt="v"
            width="50px"
            height="50px"
          />
          <p className={stylecss.content}>© 2021 The Glass Huts</p>
        </footer>
      </>
    );
  }
}

export default Payment;
