import React, { Component } from "react";
import style from "./Faq.module.css";

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
      </>
    );
  }
}

export default Faq;
