import React, { Component } from "react";
import csss from "./TheHut.module.css";

class TheHut extends Component {
  render() {
    return (
      <>
        <div className={csss.thehut1}>
          <h1 className={csss.thehuth1}>The Hut</h1>
          {/* <div className={csss.overlay12}></div> */}
        </div>
      </>
    );
  }
}

export default TheHut;
