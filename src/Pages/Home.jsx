import Marquee from "react-fast-marquee";
import Header from "./Header";
import NavBar from "./NavBar";

const Home = () => {
    return (
        <div className="font-popin w-[1400px]  mx-auto">
        <Header/>
        
        <div className="w-[1400px] mx-auto flex">
            <div className="bg-red-700 w-28 p-4 rounded-md text-white justify-center flex text-center items-center ">
                Breaking News
            </div>
            <Marquee speed={150} className="bg-gray-200">
            <p className="text-xl">I can be a React component, multiple React components, or just some text.</p>
            </Marquee>
        </div>

        <NavBar/>

        </div>
    );
};

export default Home;