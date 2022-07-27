import React from 'react'
import './sidebar.scss'
import {Link} from 'react-router-dom';
import {FaBookmark, FaCloudsmith, FaSignOutAlt, FaUser} from "react-icons/fa";
import findShareEatLogo from "../../images/findShareEatLogo.png";

function Sidebar({userValue, userLogoutAction}) {
    return (
        <div className="sidebar-container">
            <div className="side-bar-logo">
                <img src={findShareEatLogo}/>
            </div>
            <div className="user-login-details">
                <img alt="" src={userValue.picture}/>
                <span>Hello {userValue.name} / {userValue.email}</span>
            </div>

            <div className="sidebar-items">
                <Link to="/profile" className='link'>
                    <div className='nav-bar-item'>
                        <FaUser className="logo"/>
                        <p className="nav-item-text">Profile</p>
                    </div>
                </Link>
                <Link to="/saved" className='link'>
                    <div className='nav-bar-item'>
                        <FaBookmark className="logo"/>
                        <p className="nav-item-text">Saved Recipes</p>
                    </div>
                </Link>
                <Link to="/shared" className='link'>
                    <div className='nav-bar-item'>
                        <FaCloudsmith className="logo"/>
                        <p className="nav-item-text">Shared Recipes</p>
                    </div>
                </Link>
                <Link to="/welcome" className='link'>
                    <div className='nav-bar-item logout' onClick={userLogoutAction}>
                        <FaSignOutAlt className="logo"/>
                        <p className="nav-item-text">Logout</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar