import React from "react";
import { useNavigate } from "react-router-dom";
import headerS from "./header.module.css"

const Header = () => {
    const navigate = useNavigate();
    
    return (
        <nav className={headerS.nav}>
            <h1 className={headerS.headingHeader}>Wawan Januar</h1>
            <ul className={headerS.navList}>
                <li><a className={headerS.navItem} onClick={() => navigate('/')}>Home</a></li>
                <li><a className={headerS.navItem} href="/artikel">Portofolio</a></li>
                <li><a className={headerS.navItem} href="/about" onClick={() => navigate('/about')}>About</a></li>
            </ul>
        </nav>
        
    );
}

export default Header;