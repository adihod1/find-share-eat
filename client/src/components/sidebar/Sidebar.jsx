import React from 'react'
import './sidebar.scss'
import { Link } from 'react-router-dom';
import { FaUser, FaBookmark, FaCloudsmith, FaSignOutAlt } from "../../icons/index";

function Sidebar() {
    return (
        <div class="container">
            <Link to="/" class="link">
                <p class='title'>Find Share Eat</p>
            </Link>
            <Link to="/profile" class='link'>
                <div class='nav-bar-item'>
                    <FaUser class="logo" />
                    <p class="nav-item-text">Profile</p>
                </div>
            </Link>
            <Link to="/saved" class='link'>
                <div class='nav-bar-item'>
                    <FaBookmark class="logo" />
                    <p class="nav-item-text">Saved Recipes</p>
                </div>
            </Link>
            <Link to="/shared" class='link'>
                <div class='nav-bar-item'>
                    <FaCloudsmith class="logo" />
                    <p class="nav-item-text">Shared Recipes</p>
                </div>
            </Link>
            <div class='nav-bar-item logout'>
                <FaSignOutAlt class="logo" />
                <p class="nav-item-text">Logout</p>
            </div>
        </div>
    )
}

export default Sidebar