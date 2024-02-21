import { Link } from "react-router-dom";

const Trendingcard = ({news}) => {
    const {title,thumbnail_url,_id} = news;
    return (
    <div className="max-w-xs rounded-md shadow-md bg-gray-100 text-gray-800 mb-4">
	<img src={thumbnail_url} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			{/* <h2 className="text-3xl font-semibold tracki">Donec lectus leo</h2> */}
			<p className="text-gray-800">{title}</p>
		</div>
		<Link to={_id}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-amber-600 text-gray-50">Read more</button></Link>
	</div>
</div>
    );
};

export default Trendingcard;