import { useContext, useEffect, useState } from "react";
import { NewsContext } from "../components/Newsprovider";
import { GetPreviousData } from "../utilities/fakedb";
import BookmarkCard from "../components/BookmarkCard";


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
       <div className="w-[1080px] mx-auto">
        {/* <h1 className="text-center font-bold text-3xl">BookMarked : {bookmark.length}</h1> */}
       {
        bookmark.map(bookmarked=> <BookmarkCard
        key={bookmarked._id}
        bookmark={bookmarked}
        ></BookmarkCard>)
       }


            
        </div>
    )
};

export default Bookmark;