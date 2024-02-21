import { useContext } from "react";
import { AuthContext } from "../Authentication/Authprovider";
import { BallTriangle } from 'react-loader-spinner';
import { Navigate, useLocation } from "react-router-dom";
import propTypes from 'prop-types'
const Privateroute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    const location = useLocation();

    if(loading) {
        return <div className="h-screen	 flex items-center justify-center">
        <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        /></div>
    }
    if(user)return children;

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default Privateroute;
Privateroute.propTypes={
    children: propTypes.node
}