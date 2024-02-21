import { createContext, useEffect, useState } from "react";
import  propTypes from 'prop-types';
export const NewsContext =createContext(null)

const Newsprovider = ({children}) => {
    const [news,setNsews]=useState([])
    useEffect(()=>{
        fetch('news.json')
        .then(response => response.json())
        .then(data => setNsews(data))
    },[])
    const newsInfo={news}
    return (
       <NewsContext.Provider value={newsInfo}>
              {children}
       </NewsContext.Provider>
    );
};

export default Newsprovider;
Newsprovider.propTypes = {
    children: propTypes.node
};