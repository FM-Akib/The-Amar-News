import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authentication/Authprovider";


const NavBar = () => {

  const {user,logOut}=useContext(AuthContext);
  // console.log(user);



  const [scrollPosition, setScrollPosition] = useState(0);
  // console.log(scrollPosition)
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    const navlinks =<>
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/">About</NavLink></li>
     <li><NavLink to="/">Career</NavLink></li>
     <li><NavLink to="/bookmark">Bookmarked</NavLink></li>
    </>
    return (
    
        <div className={`${scrollPosition >= 262 ? 'bg-white rounded-md' : ''} z-10 navbar bg-base-100 font-roboto sticky top-0`} >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navlinks}
            </ul>
          </div>
        
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navlinks}

          </ul>
        </div>

        <div className="navbar-end">

        {
          user? <>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
        </div>
        <button onClick={logOut} className="btn ml-1">Logout</button>
          </>: 
          <>
           <Link to="/login"><button className="btn ml-1 mr-1 bg-emerald-200 border-emerald-300">Signin</button></Link>
           <Link to="/signup"><button className="btn ml-1 bg-yellow-200 border-yellow-300">Signup</button></Link>
          </>
        }
        
        
        </div>
      </div>
        
    );
};

export default NavBar;