import { Navigate, Outlet } from "react-router-dom";
import Loading from "../common/Loading";
import { useSession } from "../../hooks/useSession";

function ProtectedRoute() {
  const { loading, authenticated } = useSession();

  if (loading) return <Loading fullscreen message="Please wait…" size={48} />;
  if (!authenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
}

export default ProtectedRoute;