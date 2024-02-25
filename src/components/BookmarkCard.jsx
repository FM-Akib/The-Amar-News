import { Link } from "react-router-dom";

const BookmarkCard = ({bookmark}) => {
    const {author,title,image_url,details,_id,total_view,thumbnail_url} = bookmark;
    console.log(title)
    return (
        <article className=" flex bg-blue-200 my-10 transition hover:shadow-xl rounded-md">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            dateTime = "2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>2022</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>Oct 10</span>
          </time>
        </div>
      
        <div className="hidden sm:block sm:basis-56">
          <img
            alt=""
            src={thumbnail_url}
            className="aspect-square h-full w-full object-cover"
          />
        </div>
      
        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 className="font-bold uppercase text-gray-900">
               {title}
              </h3>
            </a>
      
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
             {details}
            </p>
          </div>
      
          <div className="sm:flex sm:items-end sm:justify-end ">
            <Link to={`/news/${_id}`}
              className="rounded-md block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </article>
                  
    );
};

export default BookmarkCard;