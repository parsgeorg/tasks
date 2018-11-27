import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import { isAuthorized, logout } from "../../session";
//import './styles.css';

class Header extends Component {
  render() {
    return (
      <div>
        {!isAuthorized() ? (
          <a href="/login" className="button">
            Login
          </a>
        ) : (
          <Button onClick={logout} variant="contained" color="primary">
            Logout
          </Button>
        )}
      </div>
    );
  }
}

export default Header;
