import { useState, ChangeEvent } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignup = async () => {
    setError("");

    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      // Signup successful, you can perform further actions here
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {error && <p>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SignupPage;
