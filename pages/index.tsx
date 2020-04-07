import React from 'react'
import Header from "./components/header";
import Contents from "./components/contents";
import fetch from "isomorphic-unfetch";

const Portfolio = props => (
  <div className="wrapper">
    <Header />
    <Contents data={props.data ? props.data : ""} />
  </div>
)

Portfolio.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/content").then(res => res.json());
  return {data: res};
}

export default Portfolio