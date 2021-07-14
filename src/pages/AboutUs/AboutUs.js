import React, { Component } from "react";
import s from "./AboutUs.module.css";
import i from "./road.jpg";
import a from "./Panorama-Glass-Lodge2.jpg";
import tuman from "./tuman.jpg";
import yoyoyo from "./yoyoyo.jpg"

class AboutUs extends Component {
  render() {
    return(
      <>
      <div className={s.aboutus}>
        <div className={s.overlay}>
      <h1 className={s.fortext}>About Us</h1>
      <button className={s.contactus}>Contact Us</button>
      <button className={s.readfaq}>Red FAQ</button>
        </div>
      </div>
      <div className={s.secdiv}>
        <img className={s.imgclass} src={i} alt="Nice!" width="347px" height="278px"/>
        <blockquote className={s.citata}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</blockquote>
        <p className={s.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, <br/> sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
      </div>
      <div className={s.thirddiv}>
        <h2 className={s.h2o}>Lorem ipsum dolor sit amet, consectetur adipiscing...</h2>
        <img className={s.imghome} src={a} alt="A" width="230px" height="230px"/>
        <img className={s.tuman} src={tuman} alt="tuman" width="500px" height="230px"/>
        <img className={s.yoyoyo} src={yoyoyo} alt="go" width="230px" height="200px"/>
        <div className={s.newdiv}>
          <p className={s.newp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <img className={s.lastimg} src="https://inhabitat.com/wp-content/blogs.dir/1/files/2018/03/Panorama-Glass-Lodge-4-889x592.jpg" alt="kek" width="230px" height="200px"/>
      </div>
      <div className={s.fourdiv}>
        <h3 className={s.h3first}>Stay in touch with us</h3>
        <p className={s.justp}>Vesterborg, Denmark</p>
        <address className={s.addressonly}>
        <a href="tel:+123 456 789 000">+123 456 789 000</a>
        <a href="mailto:info@theglasshuts.com">info@theglasshuts.com</a>
        </address>
      </div>
      </>
  );
}
}

export default AboutUs;