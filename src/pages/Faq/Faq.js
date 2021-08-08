import React, { Component } from "react";
import style from "./Faq.module.css";
import paypal from "../images/paypal.svg";
import mastercard from "../images/mastercard.svg";
import visa from "../images/visa.svg";

class Faq extends Component {
  render() {
    return (
      <>
        <div className={style.wrapper}>
          <div className={style.accordion}>
            <div className={style.accordionItem}>
              <input
                type="checkbox"
                className={style.accordionItemInput}
                id={style.accordion1}
              />
              <label className={style.accordionItemTrigger} for="accordion1">
                PRICES
              </label>
              <div className={style.accordionItemContent}>
                CANCELLATION POLICY
                <br />
                Cancellation four weeks prior = 100% refund
                <br />
                Cancellation two weeks prior = 50% refund
                <br />
                Cancellation later than two weeks = full payment
              </div>
            </div>
            <div className={style.accordionItem}>
              <input
                type="checkbox"
                className={style.accordionItemInput}
                id={style.accordion1}
              />
              <label className={style.accordionItemTrigger} for="accordion1">
                THE WALK UP TO GLASS HUT
              </label>
              <div className={style.accordionItemContent}>
                CANCELLATION POLICY
                <br />
                Cancellation four weeks prior = 100% refund
                <br />
                Cancellation two weeks prior = 50% refund
                <br />
                Cancellation later than two weeks = full payment
              </div>
            </div>
            <div className={style.accordionItem}>
              <input
                type="checkbox"
                className={style.accordionItemInput}
                id={style.accordion1}
              />
              <label className={style.accordionItemTrigger} for="accordion1">
                CAPACITY
              </label>
              <div className={style.accordionItemContent}>
                CANCELLATION POLICY
                <br />
                Cancellation four weeks prior = 100% refund
                <br />
                Cancellation two weeks prior = 50% refund
                <br />
                Cancellation later than two weeks = full payment
              </div>
            </div>

            <div className={style.accordionItem}>
              <input
                type="checkbox"
                className={style.accordionItemInput}
                id={style.accordion1}
              />
              <label className={style.accordionItemTrigger} for="accordion1">
                PETS
              </label>
              <div className={style.accordionItemContent}>
                Only small animals allowed
              </div>
            </div>
            <div className={style.accordionItem}>
              <input
                type="checkbox"
                className={style.accordionItemInput}
                id={style.accordion1}
              />
              <label className={style.accordionItemTrigger} for="accordion1">
                CHECK-IN/CHECK-OUT
              </label>
              <div className={style.accordionItemContent}>
                Check-in: 14:00;
                <br />
                Check-out: 12:00;
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p className={style.footersp}>TERMS AND CONDITIONS</p>
          <p className={style.footersp2}>CENCELLATION POLICY</p>
          <p className={style.footersp3}>PRIVACY POLICY</p>
          <img
            src={paypal}
            className={style.paypal}
            alt="Paypal"
            width="50px"
            height="50px"
          />
          <img
            src={mastercard}
            className={style.mastercard}
            alt="Mastercard"
            width="50px"
            height="50px"
          />
          <img
            src={visa}
            className={style.visa}
            alt="visa"
            width="50px"
            height="50px"
          />
          <img
            src="https://shop.sembenini.it/img/cms/bank-transfer-logo-on-black.png"
            className={style.banktransfer}
            alt="v"
            width="50px"
            height="50px"
          />
          <p className={style.content}>© 2021 The Glass Huts</p>
        </footer>
      </>
    );
  }
}

export default Faq;
