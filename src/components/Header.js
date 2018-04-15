import React from "react";
import logo from '../images/icon.jpg';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="brand">
          <img src={logo} className="logo" alt="Brand" />
          <h3>JSFactory - Insta</h3>
        </div>
        <Link to="/add"><button className="add-post">Add Post</button></Link>
      </div>
    );
  }
}

export default Header;
