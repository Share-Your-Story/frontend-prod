import React, { useEffect, useState } from "react";
import "../../Css/Trending/Trending.css";
import api from "../../Utilities/api";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Posts from "../Post/Posts";
import { post } from "../../Types/Posts";

const Home = () => {
  const [username, setUsername] = useState<string>("");
  const [posts, setPosts] = useState<Array<post>>();
  //fetch data
  const navigate: NavigateFunction = useNavigate();
  useEffect(() => {
    (async () => {
      const res = await fetch(`${api}/post/home`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      let data = await res.json();
      setUsername(data.data.username);
      setPosts(data.data.posts);
    })();
  }, [navigate]);

  return (
    <div className="trending">
      <Posts username={username} posts={posts} />
    </div>
  );
};

export default Home;
