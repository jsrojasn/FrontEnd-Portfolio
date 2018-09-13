import React from 'react';
import {  Route, Switch, BrowserRouter } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import About from "../components/About";
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';
import Contact from "../components/Contact";





const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/"  component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio/:id" component={PortfolioItem} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
