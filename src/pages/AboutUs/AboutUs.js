import React, { Component } from "react";
import s from "./AboutUs.module.css";
import i from "./road.jpg";
import a from "./Panorama-Glass-Lodge2.jpg";
import tuman from "./tuman.jpg";
import yoyoyo from "./yoyoyo.jpg";
import h from "./hart.png";
import paypal from "../images/paypal.svg";
import mastercard from "../images/mastercard.svg";
import visa from "../images/visa.svg";
import facebook from "../images/facebook-f-brands.svg";
import instagram from "../images/instagram-brands.svg";
import twit from "../images/twitter-brands.svg";
import { NavLink } from 'react-router-dom';

class AboutUs extends Component {
  render() {
    return (
      <>
        <div className={s.aboutus}>
          <div className={s.overlay}>
            <h1 className={s.fortext}>About Us</h1>
            <button className={s.contactus}>Contact Us</button>
            <NavLink to="/faq">
            <button className={s.readfaq}>Red FAQ</button>
            </NavLink>
          </div>
        </div>
        <div className={s.secdiv}>
          <img
            className={s.imgclass}
            src={i}
            alt="Nice!"
            width="347px"
            height="278px"
          />
          <blockquote className={s.citata}>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </blockquote>
          <p className={s.text}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, <br /> sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt.{" "}
          </p>
        </div>
        <div className={s.thirddiv}>
          <h2 className={s.h2o}>
            Lorem ipsum dolor sit amet, consectetur adipiscing...
          </h2>
          <img
            className={s.imghome}
            src={a}
            alt="A"
            width="230px"
            height="230px"
          />
          <img
            className={s.tuman}
            src={tuman}
            alt="tuman"
            width="500px"
            height="230px"
          />
          <img
            className={s.yoyoyo}
            src={yoyoyo}
            alt="go"
            width="230px"
            height="200px"
          />
          <div className={s.newdiv}>
            <p className={s.newp}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <img
            className={s.lastimg}
            src="https://inhabitat.com/wp-content/blogs.dir/1/files/2018/03/Panorama-Glass-Lodge-4-889x592.jpg"
            alt="kek"
            width="230px"
            height="200px"
          />
        </div>
        <div className={s.fourdiv}>
          <h3 className={s.h3first}>Stay in touch with us</h3>
          <p className={s.justp}>Vesterborg, Denmark</p>
          <address className={s.addressonly}>
            <a href="tel:+123 456 789 000">+123 456 789 000</a>
            <a href="mailto:info@theglasshuts.com">info@theglasshuts.com</a>
          </address>

          <img
            src={twit}
            alt="twitter"
            className={s.twitter}
            width="50px"
            height="50px"
          />
          <img src={facebook} alt="facebook" className={s.facebook} />
          <img src={instagram} alt="instagram" className={s.instagram} />
          <form className="firstform">
            <input
              type="text"
              id={s.fname}
              name="firstname"
              placeholder="First name"
            />
            <input
              type="text"
              id={s.lname}
              name="lastname"
              placeholder="Last name"
            />
            <input
              type="email"
              id={s.emaill}
              name="email"
              placeholder="Email"
            />
            <textarea
              id={s.subject}
              name="subject"
              placeholder="Subject"
            ></textarea>
            <textarea
              id={s.message}
              name="message"
              placeholder="Message"
              height="300px"
            ></textarea>
            <input id={s.send} type="submit" value="SEND" />
          </form>
          <p className={s.ok}>
            From Denmark, <br /> With love...
          </p>
          <img src={h} className={s.h} alt="80" />
        </div>
        <footer>
          <p className={s.footersp}>TERMS AND CONDITIONS</p>
          <p className={s.footersp2}>CENCELLATION POLICY</p>
          <p className={s.footersp3}>PRIVACY POLICY</p>
          <img
            src={paypal}
            className={s.paypal}
            alt="Paypal"
            width="50px"
            height="50px"
          />
          <img
            src={mastercard}
            className={s.mastercard}
            alt="Mastercard"
            width="50px"
            height="50px"
          />
          <img
            src={visa}
            className={s.visa}
            alt="visa"
            width="50px"
            height="50px"
          />
          <img
            src="https://shop.sembenini.it/img/cms/bank-transfer-logo-on-black.png"
            className={s.banktransfer}
            alt="v"
            width="50px"
            height="50px"
          />
          <p className={s.content}>© 2021 The Glass Huts</p>
        </footer>
      </>
    );
  }
}

export default AboutUs;
