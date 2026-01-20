import React, { Component } from 'react'
import icon from '../../../assets/icons/favicon.svg'
import './Header.scss'

export default class Header extends Component {
  render() {
    return (
      <div className='top-bar'>
        {/* Logo */}
        <img src={icon} alt="cooking assistant logo" className="logo"/>
        <h1 className="web-name">GoMango</h1>
      </div>
    )
  }
}
