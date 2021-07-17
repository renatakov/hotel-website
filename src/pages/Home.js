import React, { Component } from "react";
import style from "./Home/Home.module.css";
import map from "./Home/map.png";
import cold from "./Home/Снимок экрана 2021-07-16 085428.png";
import cook from "./Home/kitchenette.png";
import coffee from "./Home/coffee.png";
import cup from "./Home/cupoftea.png";
import parking from "./Home/parking.png";
import trees from "./Home/viewstree.png";
import heatingf from "./Home/heatingf.png";
import vtwo from "./Home/230v.png";
import parking2 from "./Home/parking2.png";
import shower from "./Home/shower.png";
import toilet from "./Home/toilets.png";
import book from "./Home/books.png";

class Home extends Component {
  render() {
    return(
      <>
      <div className={style.firstcontainer}>
      <h1 className={style.firsth1}>Find plase in the forest</h1>
      <p className={style.firstp}>Come and stay in out hut hotel near Mariager Fjord in Denmark</p>
      <button className={style.booknow}>BOOK NOW</button>
      <button className={style.price}><em>from</em> <strong>€3.200</strong> <em>per night</em></button>
      </div>
      <section className={style.firstsection}>
        <h2 className={style.h2o2}>The Cabins</h2>
        <p className={style.po2p}>Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.</p>
        <p className={style.po3p}>Read More</p>
        <img src="https://images.dwell.com/photos-6575684823601102848/6651420402502549504-large/the-bed-features-luxurious-supima-linen-and-woolen-blankets-as-well-as-hand-knit-pillows-from-a-local-artist.jpg" alt="lolololol" className={style.secimg} />
        <img src="https://cdn.archilovers.com/projects/b_730_b66affda-a307-4d28-b405-2a2b6477c8ae.jpg" alt="fera" className={style.house3} />
         <img src="https://images.dwell.com/photos-6575684823601102848/6651420397127380992-large/watch-the-northern-lights-from-the-comfort-of-your-warm-bed-at-panorama-glass-lodge-iceland-designed-by-the-estonian-company-ood-homes-the-two-200-square-foot-prefab-cabins-are-thoughtfully-made-for-small-space-living-each-has-a-bedroom-living-room-bathro.jpg" alt="feru" className={style.house2} />
        <img src="https://i2.wp.com/panoramaglasslodge.com/wp-content/uploads/2020/02/DJI_0762.jpg" alt="fero" className={style.house1} />
      </section>
      <section className={style.section2}>
        <img src={map} alt="" className={style.map} />
        <div className={style.pololo}>
        <h2 className={style.h3o3}>The Forest</h2>
        <p className={style.po5p}>Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.</p>
        <p className={style.po6p}>Read More</p>
        </div>
      </section>
      <section className={style.facilities}>
      <h3 className={style.fac}>Facilities</h3>
      <img src={cold} alt="fridge" className={style.fridge} />
      <p className={style.minif}>Mini Fridge</p>
      <img src={cook} alt="cook" className={style.kitchen} />
      <p className={style.kitchene}>Kitchenette</p>
       <img src={coffee} alt="kofe" className={style.coffee} />
      <p className={style.pcoffee}>Coffee machine</p>
      <img src={cup} alt="cup" className={style.cup} />
      <p className={style.electrictea}>Electric tea kettle</p>
      <img src={parking} alt="cars" className={style.parking} />
      <p className={style.car}>Parking</p>
      <img src={trees} alt="tree" className={style.tree} />
      <p className={style.forestree}>Breathtaking views</p>
      <img src={heatingf} alt="fh" className={style.heatingf} />
      <p className={style.pheating}>Floor heating</p>
      <img src={vtwo} alt="230v" className={style.vtwo} />
      <p className={style.pvtwo}>230V</p>
      <img src={parking2} alt="Parking" className={style.parking2} />
      <p className={style.parksp}>Parking</p>
     <img src={shower} alt="Shower" className={style.shower} />
      <p className={style.showersp}>Shower</p>
       <img src={toilet} alt="Flushing toilets" className={style.toilets} />
      <p className={style.toiletsp}>Flushing toilets</p>
      <img src={book} alt="Bedding & towels" className={style.books} />
      <p className={style.booksp}>Bedding & towels</p>
      </section>
      <section className={style.section4}>
      <img src="https://images.dwell.com/photos-6575684823601102848/6651420396669575168-large/the-cabins-overlook-the-hekla-volcano-one-of-icelands-most-active-volcanoes-it-is-part-of-a-25-mile-long-volcanic-ridge-and-during-the-middle-ages-it-was-referred-to-by-europeans-as-the-gateway-to-hell.jpg" alt="hohoho" className={style.hohoho} />
      <img src="https://mostuniquehotels.com/uploads/1024xNxunique-panorama-glass-lodge-iceland8.jpg.pagespeed.ic.dMoQ27aRIo.jpg" alt="hohoho" className={style.hoho} />
      <p className={style.imgp}>More about us</p>
      </section>
      <section className={style.sec5}>
      <h3 className={style.h3first2}>Stay in touch with us</h3>
        <p className={style.justp2}>Vesterborg, Denmark</p>
        <address className={style.addressonly2}>
        <a href="tel:+123 456 789 000">+123 456 789 000</a>
        <a href="mailto:info@theglasshuts.com">info@theglasshuts.com</a>
        </address>

        <img src="https://www.europanostra.org/wp-content/uploads/2017/09/2017-09-Twitter-logo.png" alt="joj" className={style.twitter2} width="50px" height="50px"/>
        <img src="https://i.pinimg.com/originals/41/28/2b/41282b58cf85ddaf5d28df96ed91de98.png" alt="facebook" className={style.facebook2} />
        <img src="https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png" alt="instagram" className={style.instagram2} />
      </section>
      </>
    );
  }
}

export default Home;