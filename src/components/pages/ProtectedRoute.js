import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import checkAuth from "../../hooks/auth";

function ProtectedRoute() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const ok = await checkAuth();
        setAuthenticated(ok);
        if(!ok)
          sessionStorage.removeItem("auth_session");
      } catch {
        setAuthenticated(false);
        sessionStorage.removeItem("auth_session");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!authenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
}

export default ProtectedRoute;