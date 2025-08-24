import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";  // 👈 fix path here

function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;
