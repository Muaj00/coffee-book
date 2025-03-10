import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar backdrop-blur-xl bg-white/30 z-50 fixed mx-auto px-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink
                            className={({ isActive }) => `font-semibold ${isActive ? ' text-yellow-500' : ''}`}
                            to={'/'}>Home
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `font-semibold ${isActive ? ' text-yellow-500' : ''}`}
                            to={'/coffees'}>Coffees
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `font-semibold ${isActive ? ' text-yellow-500' : ''}`}
                            to={'/dashboard'}>Dashboard
                        </NavLink>
                    </ul>
                </div>
                <Link to={'/'} className="text-xl md:text-3xl font-bold">COFFEE_BOOK</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8 font-semibold">
                    <NavLink
                        className={({ isActive }) => `font-semibold ${isActive ? ' text-yellow-500' : ''}`}
                        to={'/'}>Home
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `font-semibold ${isActive ? ' text-yellow-500' : ''}`}
                        to={'/coffees'}>Coffees
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `font-semibold ${isActive ? ' text-yellow-500' : ''}`}
                        to={'/dashboard'}>Dashboard
                    </NavLink>
                </ul>
            </div>

        </div>
    );
};

export default NavBar;