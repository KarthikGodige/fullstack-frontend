
import { useState } from "react";
import "./Login.css";

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (value.trim() === "" || !value.includes("@")) {
      setEmailError("Enter a valid email");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    if (value.length < 6) {
      setPasswordError("Password must contain at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let valid = true;

    if (email.trim() === "" || !email.includes("@")) {
      setEmailError("Enter a valid email");
      valid = false;
    }

    if (password.length < 6) {
      setPasswordError("Password must contain at least 6 characters");
      valid = false;
    }

    if (!valid) {
      setMessage("");
      return;
    }

    try {
      const response = await fetch(
        "https://fullstack-backend-pdks.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);
        setMessage("Login successful!");
        onLoginSuccess();
      } else {
        setMessage(data.message || "Login failed.");
      }
    } catch (error) {
      console.error("Login request failed:", error);
      setMessage("Could not connect to the server. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleEmailChange}
            required
          />
          <span>{emailError}</span>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={handlePasswordChange}
            required
          />
          <span>{passwordError}</span>
        </div>

        <button type="submit">Login</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default Login;