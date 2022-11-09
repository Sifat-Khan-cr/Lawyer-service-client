import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="flex-1">
                {/* <a className="btn btn-ghost normal-case text-xl">Lawyer</a> */}
                <Link to="/">Lawyer</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link>Blog</Link></li>
                    <li><Link>Contact</Link></li>
                    <li>  {
                        user?.email ?
                            <>
                                <li className='font-semibold'>
                                    <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
                                </li>
                            </>
                            :
                            <li className='font-semibold'><Link to='/login'>Login</Link></li>
                    }</li>


                </ul>
            </div>
        </div>
    );
};

export default Navbar;