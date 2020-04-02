import React, { Component } from 'react'
import Header from "./components/header";
import Section from "./components/section";
import Tags from "./components/tags";
import Contents from "./components/contents";
import fetch from "isomorphic-unfetch";


class Portfolio extends Component {
  state = {
    data: []
  }

  constructor(props: any) {
    super(props);
    this.setContentProps();
  }


  setContentProps = async () => {
    const result = await fetch("http://localhost:3000/api/content").then(res => res.json());
    this.setState({data: result});
  }
  
  render() {
    const {data} = this.state;
    return(
      <div className="wrapper">
        <Header />
        <Section />
        <Tags />
        <Contents data={data} />
      </div>
    )
  }
}

export default Portfolio