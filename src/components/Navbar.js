import React,{ useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {MdFingerprint} from 'react-icons/md';
import {FaBars, FaTimes} from 'react-icons/fa';
import Button from './Button';
import './Navbar.css'
import {IconContext} from 'react-icons/lib'

const Navbar = () => {
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(true);
        }else{
            setButton(false);
        }
    }
    useEffect(() => {
        showButton();
    },[])
    window.addEventListener('resize',showButton);
    return (
        <>
            <IconContext.Provider value={{color:"#fff"}}>
                <div className="navbar">
                    <div className="navbar_contianer container">
                        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <MdFingerprint/>
                        LAVISH 
                        </NavLink>
                        <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-items"><NavLink exact to="/" className="nav-links" onClick={closeMobileMenu}>Home</NavLink></li>
                            <li className="nav-items"><NavLink exact to="/services" className="nav-links" onClick={closeMobileMenu}>Services</NavLink></li>
                            <li className="nav-items"><NavLink exact to="/products" className="nav-links" onClick={closeMobileMenu}>Products</NavLink></li>
                            <li className="nav-items">
                                {button ? (
                                    <NavLink to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
                                        <Button buttonStyle='btn--outline'>SIGN UP</Button>
                                    </NavLink>
                                    ) : (
                                        <NavLink to="/sing-up" className="btn-links" onClick={closeMobileMenu}>
                                        <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>SIGN UP</Button>
                                        </NavLink>
                                    ) }
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}
export default Navbar;
