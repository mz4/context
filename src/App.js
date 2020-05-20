import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Login } from "./pages/Login";
import { About } from "./pages/about";
import { UserContext } from "./UserContext";

function AppRouter() {
  const [user, setUser] = useState(
  {
    login: false,
    message: "user is not logged in"
  });

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={value}>
          <Route path="/" exact component={Login} />
          <Route path="/about/" component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default AppRouter;
