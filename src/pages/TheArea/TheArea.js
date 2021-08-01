import React, { Component } from "react";
import cssstyle from "./TheArea.module.css";
import map2 from "./newmap.png";
import { css } from "styled-components";

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
          
        </section>
      </>
    );
  }
}

export default TheArea;
