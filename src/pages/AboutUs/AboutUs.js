import React, { Component } from "react";
import s from "./AboutUs.module.css"

class AboutUs extends Component {
  render() {
    return(
      <>
      <div className={s.aboutus}>
      <h1 className={s.fortext}>About Us</h1>
      <button className={s.contactus}>Contact Us</button>
      <button className={s.readfaq}>Red FAQ</button>
      </div>
      </>
  );
}
}

export default AboutUs;