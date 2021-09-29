import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./Menu.css";
import Search from "./Search";
import PanelAdd from "./PanelAdd";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newItemPanel: false };

    this.add = this.add.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  add() {
    this.setState({ newItemPanel: true });
  }

  onCancel() {
    this.setState({ newItemPanel: false });
  }

  render() {
    return (
      <div className="container">
        <div className="subcontainer">
          <div className="logo">
            <div className="logo-box">
              <img src={logo} className="App-logo" alt="logo" />
              {this.props.tittle}
            </div>
          </div>
          <div className="search">
            <Search onsearch={this.props.onsearch} />
          </div>
          <div className="actions text-box">
            <a
              href="#"
              onClick={this.add}
              className="btn btn-white btn-animate"
            >
              + Add new book
            </a>
          </div>
        </div>
        {this.state.newItemPanel ? (
          <PanelAdd onhide={this.onCancel} onadd={this.props.onadd} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Menu;
