import React from "react";
import Cards from "../components/Cards";
import "../styles/cards.css";
import Layout from "../components/Layout";
import "../styles/Index.css";
import Bounce from 'react-reveal/Bounce';

const projects = () => {
  return (
    <div className="Index">
      <Layout>
        
        <div className="wrapper">
<Bounce left>
          <Cards
            img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="Project 1"
            description="Take your boring salads up a knotch. This recipe is perfect for lunch
        and only contains 5 ingredients!"
          /></Bounce>
            <Bounce>
          <Cards
            img="https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="Project 2"
            description="Fear Risotto no more! This simple recipe is perfect for family dinners."
          /></Bounce>
          <Bounce right>
          <Cards
            img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="Project 2"
            description="Project 2. 30 minute meal!"
          /></Bounce>
<Bounce left>
          <Cards
            img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="Project 2"
            description="Project 2. 30 minute meal!"
          /></Bounce>
          <Bounce>
          <Cards
            img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="Project 2"
            description="Project 2. 30 minute meal!"
          /></Bounce>
<Bounce right>
          <Cards
            img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="Project 2"
            description="Project 2. 30 minute meal!"
          /></Bounce>
<Bounce left>
          <Cards
            img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="Project 2"
            description="Project 2. 30 minute meal!"
          /></Bounce>
        </div>
      </Layout>
    </div>
  );
};

export default projects;
