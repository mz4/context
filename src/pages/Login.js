import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { login } from "../utils/login";

export function Login() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Login</h2>
      <p>Once clicked login button, user should be available in the other page as well</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user.login ? (
        <button
          onClick={() => {
            setUser(
              {
                login: false,
                message: "user is logged out"
              }
            );
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          login
        </button>
      )}
    </div>
  );
}
