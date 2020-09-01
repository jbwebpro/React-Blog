import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavigationBar from "../components/NavigationBar";

import Home from "../pages/Home";
import BlogDetails from "../components/Blog/BlogDetails";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import BlogCreate from "../components/Blog/BlogCreate";

const AppRouter = () => {
  return (
    <div className="AppRouter">
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/blogs/:blogId" component={BlogDetails} />
          <Route path="/blog/create" component={BlogCreate} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
