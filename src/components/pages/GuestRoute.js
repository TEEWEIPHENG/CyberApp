import { Navigate } from "react-router-dom";

function GuestRoute({ children }) {
  const session = sessionStorage.getItem("auth_session");
  return session ? <Navigate to="/" replace /> : children;
}

export default GuestRoute;