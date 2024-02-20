import Marquee from "react-fast-marquee";
import Header from "./Header";
import NavBar from "./NavBar";

const Home = () => {
    return (
        <div className="font-popin w-[1400px]  mx-auto">
        <Header/>
        
        <div className="w-[1400px] mx-auto flex my-8">
            <div className="bg-red-700 w-40 p-4 rounded-tl-lg rounded-bl-lg text-white justify-center flex text-center items-center ">
                Breaking News
            </div>
            <Marquee speed={150} className="bg-gray-200 rounded-br-lg rounded-tr-lg">
            <p className="text-xl">I can be a React component, multiple React components, or just some text.</p>
            </Marquee>
        </div>

        <NavBar/>

        </div>
    );
};

export default Home;