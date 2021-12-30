import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'

import { RiMenu3Line, RiCloseLin } from 'react-icons/ri'


const NavBar = () => {
    return (
        <div>
            <div className="gpt3__navbar">
                <div className="gpt3__navbar-links">
                    <div className="gpt3__navbar-links_logo">
                        <img src={logo} alt="logo"></img>
                    </div>
                    <div className="gpt3__navbar-links_container">
                        <p><a href="#home">Home</a></p>
                        <p><a href="#wgpt3">What is GPT3</a></p>
                        <p><a href="#possibility">Open AI</a></p>
                        <p><a href="#features">Case Studoes</a></p>
                        <p><a href="#blog">Library</a></p>
                    </div>
                    <div className="gpt3__navbar-sign">
                        <p>Sign in</p>
                        <button type="button"> Sign up </button>
                    </div>
                    <div className="gpt3__navbar-menu">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
