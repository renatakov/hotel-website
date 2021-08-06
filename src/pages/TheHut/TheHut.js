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
          <p className={csss.p5thehut}>The Inside</p>
          <p className={csss.p6thehut}>Space</p>
          <p className={csss.p7thehut}>Kitchen</p>
          <p className={csss.p8thehut}>Bathroom</p>
          <p className={csss.p9thehut}>
            Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
            designed by architect Sigurd Larsen.
            <br /> They all have an open space with a double bed, a double sofa
            bed, kitchen, separate toilet and an outdoor shower.
            <br /> On the roof, surrounded by treetops, there is a terrace,
            which is about nine meters above ground.
            <br /> The cottages are built around tall, old trees that go through
            the entire cottage from floor to ceiling.
          </p>
          <img
            src="https://images.dwell.com/photos-6575684823601102848/6651420397127380992-large/watch-the-northern-lights-from-the-comfort-of-your-warm-bed-at-panorama-glass-lodge-iceland-designed-by-the-estonian-company-ood-homes-the-two-200-square-foot-prefab-cabins-are-thoughtfully-made-for-small-space-living-each-has-a-bedroom-living-room-bathro.jpg"
            alt="Second Img The Hut"
            className={csss.secondimgthehut}
          />
        </section>
      </>
    );
  }
}

export default TheHut;
