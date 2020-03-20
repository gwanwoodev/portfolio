import React, { Component } from 'react'
import Header from "./components/header";
import Contents from "./components/contents";

class Portfolio extends Component {
  constructor(props: any) {
    super(props);
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