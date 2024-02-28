import { Navigate } from "react-router-dom";
// import useAuth from "../../../hooks/use-auth";

export default function RedirectedIfAdminAuthenticated({ children }) {
    // const { authUser, isAdminMode } = useAuth();

    return (
        // authUser ? <Navigate to="/" /> : children
        true ? <Navigate to="/admin" /> : children
    )
}