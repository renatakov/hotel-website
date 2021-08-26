import React, { Component } from "react";
import stylecss from "./Payment.module.css";
import { NavLink } from "react-router-dom";

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
          <input id={stylecss.firstnamepay} type="text" placeholder="First Name" />
          <input id={stylecss.lastnamepay} type="text" placeholder="Last Name" />
          <input id={stylecss.emailpay} type="email" placeholder="Email" />
          <input id={stylecss.phonepay} type="tel" placeholder="Phone Number" />
          <input id={stylecss.addresspay} type="text" placeholder="Address" />
          <input id={stylecss.postalcodepay} type="text" placeholder="Postal Code" />
          <input id={stylecss.citypay} type="text" placeholder="City" />
          <input id={stylecss.countrypay} type="text" placeholder="Country" />
        </section>
      </>
    );
  }
}

export default Payment;