import { Link } from "react-router-dom";

const LeftNav = () => {
    return (
        <div className="font-semibold text-gray-600 sticky top-24 ">
           <h1 className="text-2xl">All Category</h1>
          
            <ul className="">
                <Link to=""><li className="my-5 ml-6">National News</li></Link>
                <Link to=""><li className="my-5 ml-6">Breaking News</li></Link>
                <Link to=""><li className="my-5 ml-6">Regular News</li></Link>
                <Link to=""><li className="my-5 ml-6">International News</li></Link>
                <Link to=""><li className="my-5 ml-6">Sports</li></Link>
                <Link to=""><li className="my-5 ml-6">Entertainment</li></Link>
                <Link to=""><li className="my-5 ml-6">Culture</li></Link>
                <Link to=""><li className="my-5 ml-6">Arts</li></Link>
                <Link to=""><li className="my-5 ml-6">All News</li></Link>
            </ul>
          
        </div>
    );
};

export default LeftNav;