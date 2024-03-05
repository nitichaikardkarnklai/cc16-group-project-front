import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";
import React from "react";

export default function ProtectedRoute({ children }) {
    const { authUser } = useAuth();
    // console.log(authUser);

    return (
        authUser ? children : <Navigate to="/login" />
    );
}