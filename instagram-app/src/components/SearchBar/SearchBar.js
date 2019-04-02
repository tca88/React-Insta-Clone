import React, { Component } from "react";
import logo from "../img/logo.png";
import name from "../img/instagram-name.png";
import discover from "../img/disover.png";
import searchLike from "../img/like.png";
import profile from "../img/account.png";
import magnifyingGlass from "../img/magnifying-glass.png";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    posts: [],
    usernameText: ""
  };

  componentDidMount() {
    this.setState({
      posts: this.props.posts,
      usernameText: this.props.username
    });
  }

  render() {
    return (
      <div className="search-bar-container">
        <div className="logo-section">
          <img className="logo-icon" src={logo} alt="logo icon" />
          <div className="vertical-pipe" />
          <img className="brand-name" src={name} alt="Instagram" />
        </div>
        <div className="search-bar-section">
          <input
            className="search-bar"
            type="search"
            placeholder="Search"
            onChange={this.props.onSearchChange}
          />
          <button onClick={this.props.onSearchSubmit} className="search-button">
            <img
              className="search-icon"
              src={magnifyingGlass}
              alt="search button"
            />
          </button>
        </div>
        <div className="account-section">
          <img className="discover-icon" src={discover} alt="discover icon" />
          <img
            className="search-like-icon"
            src={searchLike}
            alt="search like icon"
          />
          <img className="profile-icon" src={profile} alt="profile icon" />
        </div>
      </div>
    );
  }
}

export default SearchBar;
