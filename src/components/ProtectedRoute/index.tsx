import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function ProtectedRoute({ user, children }: any) {

    if (!user) {
      return <Navigate to="/login" replace />;
    }
  
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};
