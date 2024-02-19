import moment from 'moment';
import logo from '../assets/logo.png';
const Header = () => {
    return (
        <>
           
        <div className="flex justify-center">
        <img className="" src={logo}/>
        </div>           
        <h2 className="text-3xl text-center text-gray-500 m-0 font-normal">Journalism Without Fear or Favour</h2>    
        <p className="text-2xl text-center text-gray-500 font-normal mt-1">{moment().format('dddd, MMMM Do, YYYY')}</p>
        </>
    );
}

export default Header;