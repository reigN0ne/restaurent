import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className="header-nav">
            <span><img src="https://png.pngtree.com/template/20191120/ourmid/pngtree-red-chilli-food-logo-design-your-company-image_334205.jpg" alt="logo file"/></span>
            <Link to="/" style={{ color:"inherit", textDecoration: "inherit", marginTop: '5px', marginLeft: '65px' }}><h3>Home</h3></Link>
            <Link to="/category" style={{ color: 'inherit', textDecoration: 'inherit', marginTop: '5px', marginLeft: '65px'}}><h3>Menu</h3></Link>
        </div>
    )
}

export default Header
