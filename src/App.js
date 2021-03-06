import React, { Component } from "react";
import "./App.css";
import Header from './components/Header';
import AddPost from './components/AddPost';
import PostFeed from './components/PostFeed/PostFeed';
import { BrowserRouter as Router, Route } from "react-router-dom";
import loader from './images/loader.gif';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          {this.props.getPostReducer.loading && <div className="loader-div"><img src={loader} className="loader" /></div> }
          {this.props.addPostReducer.loading && <div className="loader-div"><img src={loader} className="loader" /></div> }
          <Route exact path="/" component={PostFeed} />
          <Route exact path="/add" component={AddPost} />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps)(App);
