import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Lawyer</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link>Blog</Link></li>
                    <li><Link>Contact</Link></li>


                </ul>
            </div>
        </div>
    );
};

export default Navbar;