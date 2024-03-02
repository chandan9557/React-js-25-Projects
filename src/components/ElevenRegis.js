import React, { useState } from "react";

const ElevenRegis = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([]);

  const handleAuthentication = () => {
    if (isRegister) {
      if (isRegister) {
        const user1 = user.find(
          (u) => u.email === email && u.password === password
        );
        if (user1) {
          setIsLoggedIn(true);
        }
      }
    } else {
      const newUser = { email, password };
      setUser([...user, newUser]);
      localStorage.setItem("user", JSON.stringify([...user, newUser]));
      setIsLoggedIn(true);
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          {isLoggedIn ? (
            <div>
              <h2>Welcome,{email}</h2>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div>
              <h2>{isRegister ? "Login" : "Register"}</h2>
              <form>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleAuthentication}>
                  {isRegister ? "Login" : "Register"}
                </button>
              </form>
              <p>
                {isRegister
                  ? "Don't have an account?Registernow"
                  : "Already have an account?Login in!"}
              </p>
              <button onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? "Register" : "Login"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ElevenRegis;
