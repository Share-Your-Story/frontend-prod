import React, { useState, FormEvent, useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import "../../Css/Account/LoginRegister.css";
import { Link } from "react-router-dom";
import api from "../../Utilities/api";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  //check if already logged in
  const navigate: NavigateFunction = useNavigate();
  useEffect(() => {
    (async () => {
      const res = await fetch(`${api}/user/account`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (res.status === 200) return navigate("/account");
    })();
  }, [navigate]);

  //register
  const login = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${api}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
      credentials: "include",
    });
    if (res.status === 200) navigate("/account");
    else {
      let data: { code: number; message: string } = await res.json();
      setStatus(data.message);
    }
  };

  //change in input
  const inputChange = (e: FormEvent) => {
    e.preventDefault();
    let targetElem: HTMLInputElement = e.target as HTMLInputElement;
    if (targetElem.className === "username") setUsername(targetElem.value);
    else if (targetElem.className === "password") setPassword(targetElem.value);
  };

  return (
    <div className="loginregister">
      <div className="header">Login</div>
      <div className="status">{status}</div>
      <input onChange={inputChange} placeholder="Username" spellCheck="false" type="text" className="username" />
      <input onChange={inputChange} placeholder="Password" spellCheck="false" type="password" className="password" />
      <button onClick={login} className="submit">
        Login
      </button>
      <div className="change">
        <div className="text">Don't have an account?</div>
        <Link className="link" to="/account/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
