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
      </>
    );
  }
}

export default TheArea;