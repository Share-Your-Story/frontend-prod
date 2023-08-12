import React, { useState, FormEvent } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import "../../Css/Create/Create.css";
import api from "../../Utilities/api";

const Create = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  //post
  const navigate: NavigateFunction = useNavigate();
  const post = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${api}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body: description,
      }),
      credentials: "include",
    });
    if (res.status === 200) navigate("/account");
    else if (res.status === 401) navigate("/account/login");
    else {
      let data: { code: number; message: string } = await res.json();
      setStatus(data.message);
    }
  };

  //change in input
  const inputChange = (e: FormEvent) => {
    e.preventDefault();
    let targetElem: HTMLInputElement = e.target as HTMLInputElement;
    if (targetElem.className === "title") setTitle(targetElem.value);
    else if (targetElem.className === "desc") setDescription(targetElem.value);
  };

  return (
    <div className="create">
      <div className="header">Post your story!</div>
      <div className="status">{status}</div>
      <input onChange={inputChange} placeholder="Title" type="text" spellCheck="false" className="title" />
      <textarea onChange={inputChange} placeholder="Story" spellCheck="false" className="desc"></textarea>
      <button onClick={post} className="upload">
        Post
      </button>
    </div>
  );
};

export default Create;
