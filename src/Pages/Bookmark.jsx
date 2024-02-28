import { useContext, useEffect, useState } from "react";
import { NewsContext } from "../components/Newsprovider";
import { DeleteAllBookmarked, GetPreviousData } from "../utilities/fakedb";
import BookmarkCard from "../components/BookmarkCard";
import Header from "./Header";


const Bookmark = () => {
    const {news} = useContext (NewsContext)
   const [bookmark,setBookmark]=useState([])

   useEffect(() => {
    const previousdata = GetPreviousData()
    const previousBookmarked=[];
  
            for(const id in previousdata){
              const newsBM = news.find(b=>b._id===id);
              if(newsBM){
                  previousBookmarked.push(newsBM);
              }
            }
            setBookmark(previousBookmarked)
    },[news])
  
    const ClearBookmarked = () => {
        DeleteAllBookmarked();
        setBookmark([]);
    }
    return (
        <>
        <Header></Header>
     
       <div className="w-[1080px] mx-auto">
       <div className="w-full justify-center flex  mt-8 p-2 rounded-md">
        
       <div className="relative inline-block text-left mr-6 ">
    <div className="group">
        <button type="button"
            className="rounded-md inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
            Filter           
            <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path  d="M10 12l-5-5h10l-5 5z" />
            </svg>
        </button>

       
        <div
            className="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
            <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Trending</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sports</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Weather</a>
            </div>
        </div>
    </div>
       </div>


        <button onClick={ClearBookmarked} className="items-center flex font-bold text-xl">
       <lord-icon
        src="https://cdn.lordicon.com/skkahier.json"
        trigger="hover"
        colors="primary:#e83a30">
        </lord-icon>
        clear
        </button>
        </div>
       {
        bookmark.map(bookmarked=> <BookmarkCard
        key={bookmarked._id}
        bookmark={bookmarked}
        ></BookmarkCard>)
       } 
         
        </div>
        </>
    )
};

export default Bookmark;