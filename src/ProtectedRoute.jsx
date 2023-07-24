import React from 'react';
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = ({ user, children }) => {
    let authToken = localStorage.getItem('authToken')
    if (!authToken) {
        return <Navigate to="/" replace />;
    }
    return children;
};
export default ProtectedRoute;
