import React, {Component} from "react";
import cssstyle from "./TheArea.module.css";

class TheArea extends Component {
  render() {
    return(
      <>
      <section className={cssstyle.sec1area}>
        <h1 className={cssstyle.h1area}>The Area</h1>
        <p className={cssstyle.p1area}>Vesterborg, Denmark</p>
        <button className={cssstyle.buttonsmall}>GET DIRECTIONS</button>
      </section>
      <section className={cssstyle.sec2area}>
        <img className={cssstyle.firstimgarea} src="https://live.staticflickr.com/65535/48839891426_68f5affaa0_b.jpg" alt="Forest Outside" />
        <h2 className={cssstyle.h2area}>Vesterborg</h2>
        <q className={cssstyle.q1area}>Lorem ipsum dolor sit amet, consectetur adipiscing...</q>
        <p className={cssstyle.p2area}>Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen.<br /> They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower.<br /> On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground.</p>
      </section>
      </>
    );
  }
}

export default TheArea;