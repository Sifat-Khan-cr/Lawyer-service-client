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
                <Link className='font-bold text-3xl' to="/">Lawyer</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                    <li className='font-semibold'><Link>Contact</Link></li>
                    <li>  {
                        user?.email ?
                            <>
                                <li className='font-semibold'><Link to='/'>Add Service</Link></li>
                                <li className='font-semibold'><Link to='/'>My Reviews</Link></li>
                                <li className='font-semibold'>
                                    <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
                                </li>
                                <span>{user?.displayName}</span>
                                <div className="avatar">
                                    <div className="w-16 mask mask-hexagon">
                                        <img src={user?.photoURL} alt="user" />
                                    </div>
                                </div>

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