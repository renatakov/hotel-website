import React, { Component } from "react";
import css from "./Booking.module.css";

class Booking extends Component {
  render() {
    return (
      <>
        <section className={css.sec1booking}>
          <h1 className={css.h1booking}>Booking</h1>
          <p className={css.p1booking}>Vesterborg, Denmark</p>
        </section>
        <section className={css.sec2booking}>
          <p className={css.p2booking}>Choose Additional Services</p>
          {/* <select name="food">
    {/* <optgroup label="Classic Dinner"> */}
          {/* <option value="r1">Закуска Барская</option>
          <option value="r2">Раки, фаршированные по-царски</option>
          <option value="r3">Биточки в горшочке</option> */}
    {/* </optgroup>
          </select> */}
          {/* TODO: сделать букинг(booking) */}

        </section>
      </>
    );
  }
}

export default Booking;
