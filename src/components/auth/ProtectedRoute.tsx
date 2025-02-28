import { useAuth } from "@/hooks/useAuth"
import { Navigate, Outlet } from "react-router";

function ProtectedRoute() {
    const { user } = useAuth();

    return user ? <Outlet /> : <Navigate to="auth" />
}

export default ProtectedRoute
