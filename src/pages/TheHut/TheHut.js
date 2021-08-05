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
        <section className={csss.sec2thehut}>
          <img
            src="https://cdn.archilovers.com/projects/681673f4-eee9-458a-8094-ad07de461d07.jpg"
            alt="First img the hut"
            className={csss.firstthehutimg}
          />
          <p className={csss.p1thehut}>The Outside</p>
          <p className={csss.p2thehut}>Hot tube</p>
          <p className={csss.p3thehut}>Electric car change</p>
          <p className={csss.p4thehut}>
            Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
            designed by architect Sigurd Larsen.
            <br /> They all have an open space with a double bed, a double sofa
            bed, kitchen, separate toilet and an outdoor shower.
            <br /> On the roof, surrounded by treetops, there is a terrace,
            which is about nine meters above ground.
          </p>
        </section>
      </>
    );
  }
}

export default TheHut;
