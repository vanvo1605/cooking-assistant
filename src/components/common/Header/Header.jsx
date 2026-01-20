import React, { Component } from 'react'
import './Header.scss'

export default class Header extends Component {
  render() {
    return (
      <a href="/" className='top-bar'>
        {/* Logo */}
        <img src={`${process.env.PUBLIC_URL}/assets/favicon/favicon.svg`} alt="cooking assistant logo" className="logo"/>
        <h1 className="web-name">GoMango</h1>
      </a>
    )
  }
}
