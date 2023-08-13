import React, { useState, FormEvent, useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import "../../Css/Account/LoginRegister.css";
import { Link } from "react-router-dom";
import api from "../../Utilities/api";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  //check if already logged in
  const navigate: NavigateFunction = useNavigate();
  useEffect(() => {
    try {
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
    } catch (e) {
      console.log(e);
    }
  }, [navigate]);

  //register
  const register = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${api}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          displayName,
          password,
        }),
        credentials: "include",
      });
      if (res.status === 200) navigate("/account");
      else {
        let data: { code: number; message: string } = await res.json();
        setStatus(data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  //change in input
  const inputChange = (e: FormEvent) => {
    e.preventDefault();
    let targetElem: HTMLInputElement = e.target as HTMLInputElement;
    if (targetElem.className === "username") setUsername(targetElem.value);
    if (targetElem.className === "displayName") setDisplayName(targetElem.value);
    else if (targetElem.className === "password") setPassword(targetElem.value);
  };

  return (
    <div className="loginregister">
      <div className="header">Register</div>
      <div className="status">{status}</div>
      <input onChange={inputChange} placeholder="Username" spellCheck="false" type="text" className="username" />
      <input onChange={inputChange} placeholder="Display Name" spellCheck="false" type="text" className="displayName" />
      <input onChange={inputChange} placeholder="Password" spellCheck="false" type="password" className="password" />
      <button onClick={register} className="submit">
        Register
      </button>
      <div className="change">
        <div className="text">Already have an account?</div>
        <Link className="link" to="/account/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
