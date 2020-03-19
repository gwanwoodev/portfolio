import React, {Component } from 'react'
import Header from "./components/header";

class Portfolio extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return(
      <Header iconClassName='mdc-custom-icon'/>
    )
  }
}

export default Portfolio