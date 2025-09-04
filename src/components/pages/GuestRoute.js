import { Navigate } from "react-router-dom";
import Loading from "../common/Loading";
import { useSession } from "../../hooks/useSession";

const GuestRoute = ({ children }) => {
  const { loading, authenticated } = useSession();

  if (loading) return <Loading fullscreen message="Please wait…" size={48}/>;
  return authenticated ? <Navigate to="/" replace /> : children;
};

export default GuestRoute;
