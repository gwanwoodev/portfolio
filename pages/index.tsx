import React from 'react'
import Header from "./components/main/header";
import Contents from "./components/main/contents";

const portfolios = [
  {_id: 1, title: 'My Blog', preview: 'Github Pages with Jeykll', thumbnail: '/images/github_jekyll.jpg', directLink: 'https://gwanwoodev.github.io'}
];

const Portfolio = () => (
  <div className="wrapper">
    <Header />
    <Contents data={portfolios} />
  </div>
)

export default Portfolio