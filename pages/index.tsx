import React from 'react'
import Header from "./components/main/header";
import Contents from "./components/main/contents";
import Head from "next/head";

const portfolios = [
  {_id: 1, title: 'My Blog', preview: 'Github Pages with Jeykll', thumbnail: '/images/github_jekyll.jpg', directLink: 'https://gwanwoodev.github.io'}
];

const Portfolio = () => (
  <div className="wrapper">
    <Head>
      <title>Portfolios</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
    </Head>

    <Header />
    <Contents data={portfolios} />
  </div>
)

export default Portfolio