import React, {Component} from "react";
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import data from './data.json';

export default class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Main imageData={data}></Main>
        <Footer></Footer>
      </>
    );
  } 
}


