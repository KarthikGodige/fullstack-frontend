
import { useState } from "react";
import Login from "./Login";
import Products from "./Products";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );

  function handleLoginSuccess() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Products Dashboard</h2>
          <button onClick={handleLogout}>Logout</button>
          <Products />
        </>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;