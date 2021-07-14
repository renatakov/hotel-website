import React, { Component } from "react";
import style from "./Home/Home.module.css";

class Home extends Component {
  render() {
    return(
      <>
      <div className={style.firstcontainer}>
      <h1 className={style.firsth1}>Find plase in the forest</h1>
      <p className={style.firstp}>Come and stay in out hut hotel near Mariager Fjord in Denmark</p>
      </div>
      </>
    );
  }
}

export default Home;