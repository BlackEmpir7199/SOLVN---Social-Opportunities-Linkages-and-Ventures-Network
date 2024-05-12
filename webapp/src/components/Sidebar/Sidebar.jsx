import React from "react";

import { Link } from "react-router-dom";

import './Sidebar.css';

export default function Sidebar({onNavClick, status}) {
    return(
        <div className={`sidebar-container ${status? 'active': ''}`}>
            <div className="side-bar-title-container">
                <div className="side-bar-logo">
                    SOLVN
                </div>
                <button  onClick={() => onNavClick()} className="side-bar-clode-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>
            <div className="sidebar-content-container">
                <Link onClick={() => onNavClick()} className="sidebar-nav-item" to={'/'}>
                    <div className="icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    </div>
                    <div className="nav-name-container">
                        <span>
                            Home
                        </span>
                    </div>
                </Link>

                <Link onClick={() => onNavClick()} className="sidebar-nav-item" to={'/register'}>
                    <div className="icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key-round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/></svg>
                    </div>
                    <div className="nav-name-container">
                        <span>
                            Register
                        </span>
                    </div>
                </Link>

                <Link onClick={() => onNavClick()} className="sidebar-nav-item" to={'/doc'}>
                    <div className="icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-text"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>
                    </div>
                    <div className="nav-name-container">
                        <span>
                            Documentation
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}