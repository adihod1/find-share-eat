import React from 'react'
import './sidebar.scss'
import { Link } from 'react-router-dom';
import { FaBookmark, FaCloudsmith, FaSignOutAlt, FaUser, FaShareSquare } from "react-icons/fa";
import findShareEatLogo from "../../images/LOGO.png";
import penguinIcon from "../../images/penguinIcon.png";

function Sidebar({ userValue, userLogoutAction }) {
    return (
        <div className="sidebar-container">
            <Link to="/" className="side-bar-logo">
                <img src={findShareEatLogo} />
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
                <Link to="/share-recipe" className='link'>
                    <div className='nav-bar-item'>
                        <FaShareSquare className="logo" />
                        <p className="nav-item-text">Share your own recipe</p>
                    </div>
                </Link>
                <Link to="/shared" className='link'>
                    <div className='nav-bar-item'>
                        <FaCloudsmith className="logo" />
                        <p className="nav-item-text">My Shared Recipes</p>
                    </div>
                </Link>
                <Link to="/" className='link'>
                    <div className='nav-bar-item logout' onClick={userLogoutAction}>
                        <FaSignOutAlt className="logo" />
                        <p className="nav-item-text">Logout</p>
                    </div>
                </Link>
            </div>
        <img className="penguin-img" src={penguinIcon} alt="logo" />
        </div>
    )
}

export default Sidebar