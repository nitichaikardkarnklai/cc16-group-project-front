import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";
import { useEffect } from "react";
import { toast } from "react-toastify";
import React from "react";

export default function ProtectedAdminRoute({ children }) {
    const { authUser } = useAuth();

    useEffect(() => {
        // console.log(authUser)
        if (authUser?.role === "USER") {
            toast.error("you are not admin")
        }
    })

    return (
        authUser && authUser.role !== "USER" ? children : <Navigate to="/admin/login" />
    );
}