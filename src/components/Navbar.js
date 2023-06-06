import React from 'react'
import "../styles/nav.css"
import logo from "../data/data.json"
// import {Link} from "react-router-dom"

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="48"><path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z"/></svg>
const Navbar = () => {
  return (
    <div className="nav">
        <div className="logo">
            <a href="/">
                <img id="logoImage" src={logo} alt="Not" />
                </a>
                </div>

                <a className="navlink" href="/miPhones">Mi Phones</a>
                <a className="navlink" href="/redmiPhones">Redmi Phones</a>
                <a className="navlink" href="/tv">TV</a>
                <a className="navlink" href="/laptop">Laptops</a>
                <a className="navlink" href="/fitnessAndLifeStyle">fitness & Lifestyle</a>
                <a className="navlink" href="/home">Home</a>
                <a className="navlink" href="/audio">Radio</a>
                <a className="navlink" href="/accessories">Accessories</a>
                
                <div className="searchbox">
                    <input type="text" name="search" placeholder="Search Product"/>
                    {searchIcon}
                </div>

        </div>

  )
}

export default Navbar