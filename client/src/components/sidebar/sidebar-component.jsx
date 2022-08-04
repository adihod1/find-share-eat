import React from 'react'
import './sidebar.scss'
import { Link } from 'react-router-dom';
import { FaBookmark, FaCloudsmith, FaSignOutAlt, FaUser } from "react-icons/fa";
// import findShareEatLogo from "../../images/findShareEatLogo.png";
import LOGO from "../../images/LOGO.png";


function Sidebar({ userValue, userLogoutAction }) {
    return (
        <div className="sidebar-container">
            <Link to="/" className="side-bar-logo">
                <img src={LOGO} />
            </Link>
            {userValue && <div className="user-login-details">
                <img alt="" src={userValue.picture} />
                <span>Hello {userValue.name} / {userValue.email}</span>
            </div>}
            <div className="sidebar-items">
                <Link to="/profile" className='link'>
                    <div className='nav-bar-item'>
                        <FaUser className="logo" />
                        <p className="nav-item-text">Profile</p>
                    </div>
                </Link>
                <Link to="/saved" className='link'>
                    <div className='nav-bar-item'>
                        <FaBookmark className="logo" />
                        <p className="nav-item-text">Saved Recipes</p>
                    </div>
                </Link>
                <Link to="/shared" className='link'>
                    <div className='nav-bar-item'>
                        <FaCloudsmith className="logo" />
                        <p className="nav-item-text">My Recipes</p>
                    </div>
                </Link>
                <Link to="/" className='link'>
                    <div className='nav-bar-item logout' onClick={userLogoutAction}>
                        <FaSignOutAlt className="logo" />
                        <p className="nav-item-text">Logout</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar