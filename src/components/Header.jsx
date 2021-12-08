import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { FaShoppingCart, FaHome } from "react-icons/fa";

function Header() {
    return (
        <header>
            <Link to='/'><h1 className="logo">e-Loja</h1></Link>
            <nav>
                <Link to='/'><FaHome/></Link>
                <Link to='/carrinho'><FaShoppingCart/></Link>
            </nav>
        </header>
    )
}

export default Header
