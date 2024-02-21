import { useContext } from "react";
import { Link } from "react-router-dom";
import { NewsContext } from "../components/Newsprovider";
import Trendingcard from "../components/Trendingcard";

const LeftNav = () => {

    const {news}=useContext(NewsContext);
    const sportsNews=news.filter(news => news.others_info.is_trending===true)
   
    // console.log(sportsNews);

    return (
        <div className="font-semibold text-gray-600  ">
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

            <div className="p-1 my-14 ">
                
                <h1 className="font-bold my-6 text-2xl">Trending News</h1>
                {
                   sportsNews.map(anews=> <Trendingcard
                   key={anews._id}
                   news={anews}
                   >
                   </Trendingcard>) 
                }
            </div>
          
        </div>
    );
};

export default LeftNav;