import React, { Component } from "react";
import stylecss from "./Payment.module.css";

class Payment extends Component {
  render() {
    return (
      <>
        <section className={stylecss.s1payment}>
          <p className={stylecss.p1payment}>&#8592; CONFIRM & PAY</p>
        </section>
      </>
    );
  }
}

export default Payment;
{
  /* <i className={stylecss.i1payment}>
</i> */
}
