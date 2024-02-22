import { useContext } from "react";
import { useParams } from "react-router-dom";
import { NewsContext } from "../components/Newsprovider";
import Header from "./Header";
import RightNav from "../Shared/RightNav";

const ANews = () => {
    const {news} = useContext(NewsContext);
     console.log(news)
    const {id} = useParams();
    const newsDetails = news.filter(obj => obj._id === id);
    console.log(newsDetails )
    console.log(typeof(id) )
    
    return (
        <div className="font-popin w-[1400px]  mx-auto">
           <Header/>
            
            <div className="grid grid-cols-4 ">

                <div className="col-span-3 bg-orange-400 p-8">

                <div className="max-w-5xl p-4 rounded-lg shadow-md bg-gray-50 text-gray-800">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-gray-800">Photography</a>
		</div>
		<a rel="noopener noreferrer" href="#">See All</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold text-amber-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
			</a>
			<p className="leadi text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
		</div>
	</div>
                </div>

                
                </div>
                <div className="col-span-1 p-8">
                    <RightNav/>

                </div>

            </div>

        </div>
    );
};

export default ANews;