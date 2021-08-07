import React, { Component } from "react";
import csss from "./TheHut.module.css";
import paypal from "../images/paypal.svg";
import mastercard from "../images/mastercard.svg";
import visa from "../images/visa.svg";

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
          <img
            src="http://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
            alt="Third Img The Hut"
            className={csss.thirdimgthehut}
          />
          <p className={csss.p10thehut}>Practicalities</p>
          <p className={csss.p11thehut}>Breakfast</p>
          <p className={csss.p12thehut}>Classic Dinner</p>
          <p className={csss.p13thehut}>
            Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
            designed by architect Sigurd Larsen.
            <br /> They all have an open space with a double bed, a double sofa
            bed, kitchen, separate toilet and an outdoor shower.
            <br /> On the roof, surrounded by treetops, there is a terrace,
            which is about nine meters above ground.
          </p>
          <footer>
            <p className={csss.footersp3}>TERMS AND CONDITIONS</p>
            <p className={csss.footersp9}>CENCELLATION POLICY</p>
            <p className={csss.footersp8}>PRIVACY POLICY</p>
            <img
              src={paypal}
              className={csss.paypal3}
              alt="Paypal"
              width="50px"
              height="50px"
            />
            <img
              src={mastercard}
              className={csss.mastercard3}
              alt="Mastercard"
              width="50px"
              height="50px"
            />
            <img
              src={visa}
              className={csss.visa3}
              alt="visa"
              width="50px"
              height="50px"
            />
            <img
              src="https://shop.sembenini.it/img/cms/bank-transfer-logo-on-black.png"
              className={csss.banktransfer3}
              alt="v"
              width="50px"
              height="50px"
            />
            <p className={csss.content3}>© 2021 The Glass Huts</p>
          </footer>
        </section>
      </>
    );
  }
}

export default TheHut;
