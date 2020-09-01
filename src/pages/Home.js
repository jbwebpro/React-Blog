import React from "react";
import Blog from "./Blog";
import { Link } from "react-router-dom";
import CardSearch from "../components/CardSearch/CardSearch";
import CardCategories from "../components/CardCategories/CardCategories";
import CardWidget from "../components/CardWidget/CardWidget";
import Pagination from "../components/Blog/Pagination";
import BlogList from "../components/Blog/BlogList";

const Home = () => {
  return (
    <div className="home-page" style={{ paddingTop: "50px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="my-4">Blog Posts</h1>
            <BlogList />
            <Pagination />
          </div>
          <div className="col-md-4">
            <CardSearch />
            <CardCategories />
            <CardWidget
              header="Card Widget"
              body="You can put anything you want inside of these side widgets. They are
        easy to use, and feature the new Bootstrap 4 card containers!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
