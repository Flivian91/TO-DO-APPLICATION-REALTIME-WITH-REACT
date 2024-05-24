import React, { useState } from "react";
import Login from "../components/Login/Login";
import ForgetPassword from "../components/Login/ForgetPassword";
import CreateAccount from "../components/Login/CreateAccount";
import App from "../App";


function LoginPage({invalidLogin, onLogin}) {
  const [isCreateAccount, setIscreateAccount] = useState(false);
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  return (
    <div>
      {isCreateAccount ? (
        <CreateAccount setIscreateAccount={setIscreateAccount} />
      ) : isForgetPassword ? (
        <ForgetPassword setIsForgetPassword={setIsForgetPassword} />
      ) : (
        <Login
          onLogin={onLogin}
          invalidLogin={invalidLogin}
          setIscreateAccount={setIscreateAccount}
          setIsForgetPassword={setIsForgetPassword}
        />
      )}
    </div>
  );
}

export default LoginPage;
