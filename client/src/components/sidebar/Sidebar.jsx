import React from 'react'
import './sidebar.scss'
import { Link } from 'react-router-dom';
import { FaUser, FaBookmark, FaCloudsmith, FaSignOutAlt } from "react-icons/fa";

function Sidebar() {
    return (
        <div class="container">
            <p class='title'>Find Share Eat</p>
            <Link to="/profile" className='link'>
                <div class='nav-bar-item'>
                    <FaUser className="logo" />
                    <p class="nav-item-text">Profile</p>
                </div>
            </Link>
            <Link to="/saved" className='link'>
                <div class='nav-bar-item'>
                    <FaBookmark className="logo" />
                    <p class="nav-item-text">Saved Recipes</p>
                </div>
            </Link>
            <Link to="/shared" className='link'>
                <div class='nav-bar-item'>
                    <FaCloudsmith className="logo" />
                    <p class="nav-item-text">Shared Recipes</p>
                </div>
            </Link>
            <div class='nav-bar-item logout'>
                <FaSignOutAlt className="logo" />
                <p class="nav-item-text">Logout</p>
            </div>
        </div>
    )
}

export default Sidebar