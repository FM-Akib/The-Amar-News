import { useContext, useEffect, useState } from "react";
import { NewsContext } from "../components/Newsprovider";
import { GetPreviousData } from "../utilities/fakedb";
import BookmarkCard from "../components/BookmarkCard";
import Header from "./Header";


const Bookmark = () => {
    const {news} = useContext (NewsContext)
    // console.log(news)
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
  
//    console.log(bookmark.title)
//    const {author,title,image_url,details,_id,total_view} = bookmark;

    return (
        <>
        <Header></Header>
     
       <div className="w-[1080px] mx-auto">
       <div className="w-full bg-amber-600 mt-8 p-2">
            sd
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