import { useContext, useEffect, useState } from "react";
import { NewsContext } from "../components/Newsprovider";
import { GetPreviousData } from "../utilities/fakedb";


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
  
   console.log(bookmark)

    return (
        <div>

            <h1 className="text-center font-bold text-3xl">BookMarked : {bookmark.length}</h1>
            
        </div>
    )
};

export default Bookmark;