import React, { Component } from "react";
import csss from "./TheHut.module.css";

class TheHut extends Component{
  render() {
    return(
      <>
      <div classsName={csss.thehutdiv}>
        <img className={csss.imgthehut} src="https://i.pinimg.com/originals/b8/ff/59/b8ff59f93b8b250b6ac07f99938a0200.jpg" alt="" />
        <div className={csss.overlay12}></div>
        <h1 className={csss.thehuth1}>The Hut</h1>
      </div>
      </>
    );
  }
}

export default TheHut;