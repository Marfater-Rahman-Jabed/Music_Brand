
const NavBar = () => {
    return (
        <div className="navbar bg-base-100 lg:p-6 md:p-4" style={{ position: "sticky", top: 0, zIndex: 100 }}>
            <div className="lg:navbar-start md:navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content md:mt-4 mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        <li>
                            <a>SHOWS</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>TV Shows</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>Pages</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>Event</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>Blogs</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <h1 className="lg:text-5xl md:text-5xl text-4xl md:mx-2 font-bold">Music Brand</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    <li tabIndex={0} className="mx-4">
                        <details>
                            <summary className="text-xl font-bold">Shows</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0} className="mx-4">
                        <details>
                            <summary className="text-xl font-bold">TV Shows</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0} className="mx-4">
                        <details>
                            <summary className="text-xl font-bold">Pages</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0} className="mx-4">
                        <details>
                            <summary className="text-xl font-bold">Event</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0} className="mx-4">
                        <details>
                            <summary className="text-xl font-bold">BLogs</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>

                </ul>
            </div>

        </div>
    );
};

export default NavBar;