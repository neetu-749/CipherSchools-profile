import { useState } from "react";


export default function Password() {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

    return (
      <div>
        <input type={passwordShown ? "text" : "password"} />
        <button onClick={togglePassword}>Show Password</button>
      </div>
    );
  }