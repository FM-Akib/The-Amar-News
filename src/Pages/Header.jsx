import logo from '../assets/logo.png';
const Header = () => {
    return (
        <>
           
        <div className="flex justify-center">
        <img className="" src={logo}/>
        </div>           
        <h2 className="text-center text-gray-500 m-0 font-normal">Journalism Without Fear or Favour</h2>    
        
        </>
    );
}

export default Header;