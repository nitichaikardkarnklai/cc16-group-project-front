import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";
import React from "react";

export default function RedirectedIfAdminAuthenticated({ children }) {
    const { authUser } = useAuth();
    console.log(authUser)

    return (
        authUser && authUser.role !== "USER" ? <Navigate to="/admin/" /> : children
    )
}