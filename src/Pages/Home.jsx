import Marquee from "react-fast-marquee";
import Header from "./Header";
import NavBar from "./NavBar";
import LeftNav from "../Shared/LeftNav";
import RightNav from "../Shared/RightNav";
import { useContext } from "react";
import { NewsContext } from "../components/Newsprovider";
import NewsCard from "../components/NewsCard";

const Home = () => {
    const {news}=useContext(NewsContext);
    //  console.log(news)



    return (
        <div className="font-popin w-[1400px]  mx-auto">
        <Header/>
        
        <div className="w-[1400px] mx-auto flex my-8">
            <div className="bg-red-700 w-40 p-4 rounded-tl-lg rounded-bl-lg text-white justify-center flex text-center items-center ">
                Breaking News
            </div>
            <Marquee speed={150} className="bg-blue-100 rounded-br-lg rounded-tr-lg">
            <p className="text-xl">I can be a React component, multiple React components, or just some text.</p>
            </Marquee>
        </div>

        <NavBar/>

        <div className="grid grid-cols-4">

            <div className="col-span-1 p-10  ">
                <LeftNav></LeftNav>
            </div>

            <div className="col-span-2 py-10 px-2 ">
            {
                news ? news.map(anews=> <NewsCard
                key={anews._id}
                anews={anews}
                ></NewsCard>):'Loading...'
            }
            </div>
            
            <div className="col-span-1 p-10 ">
                <RightNav></RightNav>
            </div>

        </div>

        </div>
    );
};

export default Home;