import React, { useState } from "react";
import LoginPage from "./Pages/LoginPage";
import App from "./App";
const users = [
  {
    name: "Flivian",
    email: "dflivo@gmail.com",
    password: "1234",
  },
  {
    name: "Mawira",
    email: "mawira@gmail.com",
    password: "1111",
  },
  {
    name: "Benson",
    email: "benson@gmail.com",
    password: "2222",
  },
];
function Layout() {
  const [isLogin, setIsLogin] = useState(true);
  const [invalidLogin, setInvalidLogin] = useState("");
  const[currentUser, setCurrentuser] = useState()
  function handleLogin(newUser) {
    console.log(newUser);
    setCurrentuser(users.find((user) => user.email === newUser.email));
    console.log(currentUser);
    if (currentUser?.password === newUser.password) {
      setTimeout(() => {
        setIsLogin(true);
      }, 2000);
    } else {
      setInvalidLogin("Invalid credentials!!!");
    }
  }

  return (
    <div>
      {isLogin ? (
        <App currentUser={currentUser} />
      ) : (
        <LoginPage
          onLogin={handleLogin}
          invalidLogin={invalidLogin}
          users={users}
          currentUser={currentUser}
          setIsLogin={setIsLogin}
        />
      )}
    </div>
  );
}

export default Layout;
