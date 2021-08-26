import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import css from "./Booking.module.css";
import paypal from "../images/paypal.svg";
import mastercard from "../images/mastercard.svg";
import visa from "../images/visa.svg";

class Booking extends Component {
  //   const decreaseBtn = document.querySelector("button__decrease");
  // const increaseBtn = document.querySelector("button__increase");
  // const counter = document.querySelector("counter");
  // let count = 1;

  // decreaseBtn.addEventListener("click", () => {
  //   if (count >= 2) {
  //     count--;
  //     counter.innerHTML = count;
  //     counterStyle();
  //   }
  // });

  // increaseBtn.addEventListener("click", () => {
  //   count++;
  //   counter.innerHTML = count;
  //   counterStyle();
  // });

  // function counterStyle() {
  //   if (count < 1) {
  //     counter.classList.add("negative");
  //   } else if (count > 1) {
  //     counter.classList.add("positive");
  //   } else {
  //     counter.classList.remove("negative");
  //     counter.classList.remove("positive");
  //   }
  // }

  render() {
    return (
      <>
        <section className={css.sec1booking}>
          <h1 className={css.h1booking}>Booking</h1>
          <p className={css.p1booking}>Vesterborg, Denmark</p>
        </section>
        <section className={css.sec2booking}>
          <p className={css.p2booking}>Choose Additional Services</p>
          {/* TODO: сделать букинг(booking) */}
          <h4 className={css.h4booking}>Classic Dinner</h4>
          <p className={css.p3booking}>
            Bread, Coffee, milk, juice, and a selection of spreads + toppings.
          </p>
        </section>
        <section className={css.sec3booking}>
          <p className={css.p4booking}>Hut rules</p>
          <p className={css.p5booking}>
            Check-in: 2:00 PM - 11:00 PM <br /> Checkout: 11:00 AM <br /> Not
            suitable for children and infants <br /> No smoking <br /> No pets
          </p>
        </section>
        <section className={css.sec3booking}>
          <p className={css.p6booking}>Cancellation policy</p>
          <p className={css.p7booking}>
            Free cancellation until 1:00 PM on Mar 27
            <br /> After that, cancel before 2:00 PM on Apr 1 and get a 50%
            refund, minus the first night
            <br /> and service fee.
          </p>
        </section>
        <section className={css.sec4booking}>
          <p className={css.p8booking}>Important Information</p>
          <p className={css.p9booking}>
            You need to hike a steep hill to arrive at the treehouses, it takes
            approx 20-30 minutes
            <br /> on a trail with stairs and uneven ground.
          </p>
        </section>

        <NavLink to="/faq">
          <button className={css.faqbooking}>READ FAQ</button>
        </NavLink>
        <footer>
          <p className={css.footerspb}>TERMS AND CONDITIONS</p>
          <p className={css.footerspb2}>CENCELLATION POLICY</p>
          <p className={css.footerspb3}>PRIVACY POLICY</p>
          <img
            src={paypal}
            className={css.paypalbook}
            alt="Paypal"
            width="50px"
            height="50px"
          />
          <img
            src={mastercard}
            className={css.mastercardbook}
            alt="Mastercard"
            width="50px"
            height="50px"
          />
          <img
            src={visa}
            className={css.visabook}
            alt="visa"
            width="50px"
            height="50px"
          />
          <img
            src="https://shop.sembenini.it/img/cms/bank-transfer-logo-on-black.png"
            className={css.banktransferbook}
            alt="v"
            width="50px"
            height="50px"
          />
          <p className={css.contentbook}>© 2021 The Glass Huts</p>
        </footer>
        <section className={css.sec5booking}>
          <h3 className={css.h35booking}>
            3.200kr <em> /night </em>
          </h3>
          <div className={css.sec51booking}>
            <p className={css.p10booking51}>Check in</p>
            <p className={css.p11booking51}>4/29/2021</p>
            <i className={css.i1booking51}></i>
            <p className={css.p12booking51}>Check out</p>
            <p className={css.p13booking51}>4/30/2021</p>
            <i className={css.i2booking51}></i>
            <div className={css.counter}>
              <p className={css.p14booking51}>Guests</p>
              <button className={css.button__decrease}>-</button>
              <p className={css.counter1}>1</p>
              <button className={css.button__increase}>+</button>
            </div>
          </div>
          <NavLink to="/payment">
            <button className={css.bookpay}>book</button>
          </NavLink>
          <p className={css.p15booking51}>3.200kr x 2 nights</p>
          <p className={css.p16booking51}>Classic Dinner for one</p>
          <p className={css.p17booking51}>Electric Car Charge</p>
          <p className={css.p18booking51}>10% discount</p>
        </section>
      </>
    );
  }
}

export default Booking;
