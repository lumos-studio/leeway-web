import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./AuthContext";

const Protected =() => {
    const {user} =UserAuth()
    if(!user){
        return <Navigate to='/' />
    }
    return Children;
};
export default Protected;