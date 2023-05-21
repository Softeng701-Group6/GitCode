import { useNavigate } from "react-router-dom";

export default function NavigationBar() {

  const navigate = useNavigate();

  return (
    <div>
      <p>Navigation</p>
      <button onClick={() => navigate('login')}>Login</button>
      <button onClick={() => navigate('signup')}>Sign Up</button>
    </div>
  );
}