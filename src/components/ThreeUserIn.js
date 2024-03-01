import React, { useState } from "react";

const ThreeUserIn = () => {
  const [user, setUser] = useState();
  return (
    <div className="m-5">
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <h3 style={{ textAlign: "start" }}>input:{user}</h3>
    </div>
  );
};

export default ThreeUserIn;
