import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../common/Loading";
import { IsTokenExpired, ClearSessionAsync } from "../../hooks/useSession";

function ProtectedRoute() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const ok = !IsTokenExpired();
        setAuthenticated(ok);
        if (!ok) {
          await ClearSessionAsync();
        }

      } catch {
        setAuthenticated(false);
        await ClearSessionAsync();
        sessionStorage.removeItem("session_expiry");

      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <Loading fullscreen message="Please wait…" size={48} />;
  if (!authenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
}

export default ProtectedRoute;