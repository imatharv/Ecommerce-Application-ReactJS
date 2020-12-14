import React from "react"
import PropTypes from "prop-types"

import Navbar from "./Reusable/Navbar"
import Footer from "./Reusable/Footer"

import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({children}) => (
  <div>
    <Navbar />
    {children} 
    <Footer copyrightYear="2020" />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
