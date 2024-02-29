import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";
import React from "react";

export default function RedirectedIfAdminAuthenticated({ children }) {
    const { authUser } = useAuth();

    return (
        authUser && authUser.role === "ADMIN" ? <Navigate to="/admin/login" /> : children
    )
}