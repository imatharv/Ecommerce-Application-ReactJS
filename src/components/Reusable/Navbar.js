import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import { FaCartArrowDown } from "react-icons/fa"

export default class Navbar extends Component {
  state = {
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
    menus: [{
      id: 1,
      text: "Home",
      url: '/',
    }, {
      id: 2,
      text: "About",
      url: '/about',
    }, {
      id: 3,
      text: "Services",
      url: '/services',
    }, {
      id: 4,
      text: "Contact",
      url: '/contact',
    }]
  }
  myToggler = () => {
    this.state.navbarState
    ? this.setState({
      navbarState: false,
      navbarClass: "collapse navbar-collapse"
    })
    : this.setState({
      navbarState: true,
      navbarClass: "collapse navbar-collapse show"
    })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-theme-nav">
        <div className="container">
          <Link to="/" className="navbar-brand ml-sm-5">
            <img src={logo} alt="Logo" width="40px" className="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.myToggler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={this.state.navbarClass}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              {this.state.menus.map( menu => {
                return (
                  <li key={menu.id} className="nav-item">
                    <Link to={menu.url} className="nav-link">
                      {menu.text}
                    </Link>
                  </li>
                )
              })}
              
              <li className="nav-item">
                <Link to="/" className="nav-link">
                    <FaCartArrowDown className="mb-1 text-warning" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
