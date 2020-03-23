import React, { Component } from 'react'
import Header from "./components/header";
import Contents from "./components/contents";
import fetch from "isomorphic-unfetch";

class Portfolio extends Component {
  constructor(props: any) {
    super(props);
    this.setContentProps();
  }


  setContentProps = async () => {
    const result = await fetch("http://localhost:3000/api/content").then(res => res.json());    
    console.log(result);
  }
  
  render() {
    return(
      <div className="wrapper">
        <Header iconClassName='mdc-custom-icon' />
        <Contents />
      </div>
    )
  }
}

export default Portfolio