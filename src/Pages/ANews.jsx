import { useContext } from "react";
import { useParams } from "react-router-dom";
import { NewsContext } from "../components/Newsprovider";
import Header from "./Header";
import RightNav from "../Shared/RightNav";

const ANews = () => {
    const {news} = useContext(NewsContext);
    //  console.log(news)
    const {id} = useParams();
    const newsDetails = news.filter(obj => obj._id === id);
    // console.log(newsDetails )
    // console.log(typeof(id) )
    const {title,details,image_url,total_view,author} = newsDetails[0];
    // console.log(title)
    
    return (
        <div className="font-popin w-[1400px]  mx-auto">
           <Header/>
            
            <div className="grid grid-cols-4 mt-8">

                <div className="col-span-3  p-8">
                <div className="max-w-5xl p-4 rounded-lg shadow-md bg-gray-50 text-gray-800">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-gray-800">Total View - {total_view}</a>
		</div>
		<a rel="noopener noreferrer" href="#">See All</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={image_url} alt="" className="block object-cover object-center w-full rounded-md  bg-gray-500" />
			<div className="flex items-center text-xl font-semibold">
				<span>{author.name}</span>
			</div>
		</div>
		<div className="space-y-3">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-2xl font-bold text-amber-600">{title}</h3>
			</a>
			<p className=" text-gray-800 text-xl leading-8 p-2">{details}</p>
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