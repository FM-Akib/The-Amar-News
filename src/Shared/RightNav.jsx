import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const RightNav = () => {
    
    return (
        <div className="sticky top-12">
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


        </div>
    );
};

export default RightNav;