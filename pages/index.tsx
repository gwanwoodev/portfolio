import React, { Component, Fragment } from 'react'
import Header from "./components/header";

class Portfolio extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return(
      <Fragment>
        <Header iconClassName='mdc-custom-icon' />
      </Fragment>
    )
  }
}

export default Portfolio