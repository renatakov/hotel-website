import React, { Component } from "react";
import cssstyle from "./TheArea.module.css";
import map2 from "./newmap.png";
import paypal from "../images/paypal.svg";
import mastercard from "../images/mastercard.svg";




class TheArea extends Component {
  render() {
    return (
      <>
        <section className={cssstyle.sec1area}>
          <h1 className={cssstyle.h1area}>The Area</h1>
          <p className={cssstyle.p1area}>Vesterborg, Denmark</p>
          <button className={cssstyle.buttonsmall}>GET DIRECTIONS</button>
        </section>
        <section className={cssstyle.sec2area}>
          <img
            className={cssstyle.firstimgarea}
            src="https://live.staticflickr.com/65535/48839891426_68f5affaa0_b.jpg"
            alt="Forest Outside"
          />
          <h2 className={cssstyle.h2area}>Vesterborg</h2>
          <q className={cssstyle.q1area}>
            Lorem ipsum dolor sit amet, consectetur adipiscing...
          </q>
          <p className={cssstyle.p2area}>
            Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
            designed by architect Sigurd Larsen.
            <br /> They all have an open space with a double bed, a double sofa
            bed, kitchen, separate toilet and an outdoor shower.
            <br /> On the roof, surrounded by treetops, there is a terrace,
            which is about nine meters above ground.
          </p>
        </section>
        <section className={cssstyle.sec3area}>
          <p className={cssstyle.p3area}>
            Lorem ipsum dolor sit amet, consectetur adipiscing...
          </p>
          <img className={cssstyle.maparea} src={map2} alt="Map 2" />
        </section>
        <h3 className={cssstyle.h3area}>Activities</h3>
        <section className={cssstyle.sec4area}>
          <img
            className={cssstyle.restaurant}
            src="https://images.unsplash.com/photo-1563615159379-886c72f17ab7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt=""
          />
          <p className={cssstyle.p4area}>Restaurants & shopping</p>
          <p className={cssstyle.p41area}>Lorem Impus</p>
          <p className={cssstyle.p42area}>Lorem Impus</p>
          <p className={cssstyle.p43area}>
            Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
            designed by architect Sigurd Larsen. <br /> They all have an open
            space with a double bed, a double sofa bed, kitchen, separate toilet
            and an outdoor shower.
            <br /> On the roof, surrounded by treetops, there is a terrace,
            which is about nine meters above ground.
          </p>
          <p className={cssstyle.p5area}>Experiences in nature</p>
          <p className={cssstyle.p51area}>Lorem Impus</p>
          <p className={cssstyle.p52area}>Lorem Impus</p>
          <p className={cssstyle.p53area}>
            Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
            designed by architect Sigurd Larsen.
            <br /> They all have an open space with a double bed, a double sofa
            bed, kitchen, separate toilet and an outdoor shower. <br /> On the
            roof, surrounded by treetops, there is a terrace, which is about
            nine meters above ground. <br /> The cottages are built around tall,
            old trees that go through the entire cottage from floor to ceiling.
          </p>
          <img
            className={cssstyle.naturalarea}
            src="https://blog.zor.com/wp-content/uploads/2020/07/blake-richard-verdoorn-cssvEZacHvQ-unsplash.jpg"
            alt="Natural Area"
          />
          <img
            src="https://images.unsplash.com/photo-1489402954857-207e3f591c0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Road Img"
            className={cssstyle.roadimg}
          />
          <p className={cssstyle.drivep}>Go for a drive</p>
          <p className={cssstyle.p61area}>Lorem Impus</p>
          <p className={cssstyle.p62area}>Lorem Impus</p>
          <p className={cssstyle.p63area}>
            Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
            designed by architect Sigurd Larsen.
            <br /> They all have an open space with a double bed, a double sofa
            bed, kitchen, separate toilet and an outdoor shower.
            <br /> On the roof, surrounded by treetops, there is a terrace,
            which is about nine meters above ground.
          </p>
          <p className={cssstyle.p7area}>Small-town charm</p>
          <p className={cssstyle.p71area}>Lorem Impus</p>
          <p className={cssstyle.p72area}>Lorem Impus</p>
          <p className={cssstyle.p73area}>
            Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
            designed by architect Sigurd Larsen. <br /> They all have an open
            space with a double bed, a double sofa bed, kitchen, separate toilet
            and an outdoor shower.
            <br /> On the roof, surrounded by treetops, there is a terrace,
            which is about nine meters above ground.
            <br /> The cottages are built around tall, old trees that go through
            the entire cottage from floor to ceiling.
          </p>
          <img
            src="http://images.unsplash.com/photo-1604977573941-b73236a9edd0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
            alt=""
            className={cssstyle.townimg}
          />
        </section>
        <section className={cssstyle.sec5area}></section>
        <footer>
          <p className={cssstyle.footersp2}>TERMS AND CONDITIONS</p>
          <p className={cssstyle.footersp4}>CENCELLATION POLICY</p>
          <p className={cssstyle.footersp5}>PRIVACY POLICY</p>
          <img
            src={paypal}
            className={cssstyle.paypal2}
            alt="Paypal"
            width="50px"
            height="50px"
          />
          <img
            src={mastercard}
            className={cssstyle.mastercard2}
            alt="Mastercard"
            width="50px"
            height="50px"
          />
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/visa-credit-debit-bank-transaction-card-32265.png"
            className={cssstyle.visa2}
            alt="visa"
            width="50px"
            height="50px"
          />
          <img
            src="https://shop.sembenini.it/img/cms/bank-transfer-logo-on-black.png"
            className={cssstyle.banktransfer2}
            alt="v"
            width="50px"
            height="50px"
          />
          <p className={cssstyle.content2}>© 2021 The Glass Huts</p>
        </footer>
      </>
    );
  }
}

export default TheArea;
