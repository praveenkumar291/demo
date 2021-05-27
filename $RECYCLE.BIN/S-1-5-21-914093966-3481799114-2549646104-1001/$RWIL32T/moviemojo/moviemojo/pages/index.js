import React, { Component } from "react";
import styles from "../styles/Home.module.css";

export default class index extends Component {
  state = {
    movie: {},
  };
  static async getInitialProps(ctx) {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=c713b6d1d6d8c611962cac3d38221cc3"
    );
    const movieResponce = await res.json();
    this.setState(
      () => ({ movie: movieResponce }),
      () => {
        console.log("update state in updateCurrentActive: ", this.state);
      }
    );
  }
  render() {
    return (
      <div className={styles.container}>
        <h1>hi</h1>
      </div>
    );
  }
}
