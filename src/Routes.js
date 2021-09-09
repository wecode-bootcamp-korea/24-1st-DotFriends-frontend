import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Footer from './components/Footer/Footer';
import ProductList from './pages/ProductList/ProductList';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/product/:id" component={ProductDetail} />
          <Route exact path="/product-list/:category" component={ProductList} />
          <Route exact path="/product-list" component={ProductList} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
