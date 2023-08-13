import React, { useEffect, useState } from "react";
import "../../Css/Account/Account.css";
import { accountProps } from "../../Types/Account";
import Posts from "../Post/Posts";
import api from "../../Utilities/api";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { post } from "../../Types/Posts";
const Account = (props: accountProps) => {
  //All the data
  const [displayName, setDisplayName] = useState<string>();
  const [username, setUsername] = useState<string>("");
  const [likeCount, setLikeCount] = useState<number>();
  const [likeName, setLikeName] = useState<string>();
  const [postCount, setPostCount] = useState<number>();
  const [postName, setPostName] = useState<string>();
  const [posts, setPosts] = useState<Array<post>>();

  //fetch data
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
        if (res.status === 401) return navigate("/account/register");

        let data = await res.json();
        setDisplayName(data.data.displayName);
        setUsername(data.data.username);
        setPostName("Posts");
        setLikeName("Likes");
        setPostCount(data.data.posts.length);
        setPosts(data.data.posts);
        //like count
        let totalLikes: number = 0;
        data.data.posts.forEach((e: { likes: number }) => (totalLikes += e.likes));
        setLikeCount(totalLikes);
      })();
    } catch (e) {
      console.log(e);
    }
  }, [navigate]);
  return (
    <div className="account">
      <div className="displayName">{displayName}</div>
      <div className="username">{username}</div>
      <div className="metrics">
        <div className="likecount">
          <div className="value">{likeCount}</div>
          <div className="name">{likeName}</div>
        </div>
        <div className="postcount">
          <div className="value">{postCount}</div>
          <div className="name">{postName}</div>
        </div>
      </div>
      <Posts posts={posts} username={username} />
    </div>
  );
};

export default Account;
