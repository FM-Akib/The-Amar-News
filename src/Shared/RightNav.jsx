import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

import q1 from '../assets/qZone1.png'; 
import q2 from '../assets/qZone2.png'; 
import q3 from '../assets/qZone3.png'; 
import add1 from '../assets/advertise.png'; 

const RightNav = () => {
    
    return (
        <div className="">
            {/* login with */}
            <div className="mb-5">
                <h2 className="text-2xl mb-2">Login with</h2>
                <Link to=""><button className="border-none btn w-full bg-slate-200 mb-2"><FcGoogle /> Login with google</button></Link>
                <Link to=""><button className="border-none btn w-full bg-slate-200 mb-2"><FaGithub /> Login with github</button></Link>

            </div>

            {/* find us  */}
            <div className="">
            <h2 className="text-2xl mb-4">Find us on</h2>
            <div className="">
                
                <Link to=""><div className="rounded-tr-lg rounded-tl-lg border-t-2 border-l-2 border-r-2  border-teal-300 flex items-center justify-center p-3 font-semibold w-full bg-slate-100 "><FaFacebook className="mr-2" />Facebook</div></Link>
                <Link to=""><div className="border-2 border-teal-300 flex items-center justify-center p-3 font-semibold w-full bg-slate-100 "><FaInstagram className="mr-2" />Instagram</div></Link>
                <Link to=""><div className="rounded-br-lg rounded-bl-lg border-b-2 border-l-2 border-r-2 border-teal-300 flex items-center justify-center p-3 font-semibold w-full bg-slate-100 "><FaTwitter className="mr-2"/>Twitter</div></Link>

            </div>
            </div>

            {/* Q-zone */}
            <div className="mt-8 bg-slate-200 p-1 rounded-md">
            <h1 className="my-2 ml-2 font-bold">Q Zone</h1>
            <img src={q1} alt=""/>
            <img src={q2} alt=""/>
            <img src={q3} alt=""/>
            </div>
 
            <div className="mt-8">
                <img src={add1}/>
            </div>
        </div>
    );
};

export default RightNav;