import '../HeroSection/HeroSection.css'
import Logo from '../../assets/guiterLogo.jpg'
import Logos from '../../assets/fire5.jpg'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className="navbar  lg:p-6 md:p-4 border-b-0 text-white" style={{ position: "sticky", top: 0, zIndex: 100, backgroundImage: `url(${Logos})`, backgroundRepeat: 'no', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="lg:navbar-start md:navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content md:mt-4 mt-2 z-[1] p-2 shadow bg-orange-700 py-6 rounded-box w-52">
                        <li tabIndex={0} className="mx-2">

                            <summary className="text-2xl font-bold">
                                <Link to='/allArticles'>Articles</Link>
                            </summary>


                        </li>
                        <li tabIndex={0} className="mx-2">

                            <summary className="text-2xl font-bold">
                                <Link to='/allPhotos'>Photos</Link>
                            </summary>


                        </li>
                        <li tabIndex={0} className="mx-2">

                            <summary className="text-2xl font-bold">
                                <Link to='/allvideos'>Videos</Link>
                            </summary>


                        </li>

                        <li tabIndex={0} className="mx-2">

                            <summary className="text-2xl font-bold">
                                <Link to='/createPost'>Create Post</Link>
                            </summary>


                        </li>


                    </ul>
                </div>
                <div className='flex'>
                    <Link to='/'><img src={Logo} alt="" className='w-20 h-20 rounded-full' /></Link>
                    <h1 className="lg:text-7xl md:text-7xl text-6xl md:mx-2  text-color-animation font-serif mt-2"><Link to='/' className='italic'>MUSIC</Link></h1>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">



                    <li tabIndex={0} className="mx-2">

                        <summary className="text-2xl font-bold">
                            <Link to='/allArticles'>Articles</Link>
                        </summary>


                    </li>
                    <li tabIndex={0} className="pe-8">

                        <summary className="text-2xl font-bold">
                            <Link to='/allPhotos'>Photos</Link>
                        </summary>


                    </li>
                    <li tabIndex={0} className="mx-2">

                        <summary className="text-2xl font-bold">
                            <Link to='/allvideos'>Videos</Link>
                        </summary>


                    </li>

                    <li tabIndex={0} className="mx-2">

                        <summary className="text-2xl font-bold">
                            <Link to='/createPost'>Create Post</Link>
                        </summary>


                    </li>

                </ul>
            </div>

        </div>
    );
};

export default NavBar;