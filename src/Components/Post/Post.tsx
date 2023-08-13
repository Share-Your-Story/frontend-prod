import React, { useState, MouseEvent } from "react";
import { postProps } from "../../Types/Post";
import { Icons } from "../../Types/Icons";
import getIcons from "../../Utilities/getIcons";
import "../../Css/Post/Post.css";
import api from "../../Utilities/api";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Post = (props: postProps) => {
  let likeIcons: Icons = getIcons("heart");
  let [likes, setLikes] = useState<number>(props.likes);
  let [liked, setLiked] = useState<boolean>(props.liked);

  //hover effect
  const [hovered, setHovered] = useState<string>(likeIcons.gray);
  const [hoveredClass, setHoveredClass] = useState<string>("light");
  const onEnter = (e: MouseEvent) => {
    e.preventDefault();
    setHovered(likeIcons.black);
    setHoveredClass("dark");
  };
  const onLeave = (e: MouseEvent) => {
    e.preventDefault();
    setHovered(likeIcons.gray);
    setHoveredClass("light");
  };

  //like
  const navigate: NavigateFunction = useNavigate();
  const like = async (e: MouseEvent) => {
    e.preventDefault();
    if (liked) return;

    //update database
    try {
      const res = await fetch(`${api}/post/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: props._id,
        }),
        credentials: "include",
      });
      if (res.status === 401) navigate("/account/register");
      else if (res.status !== 200) return;
      setLiked(true);
      setLikes(likes + 1);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="post">
      <div className="header1">
        <div className="title">{props.title}</div>
        <div onClick={like} onMouseEnter={onEnter} onMouseLeave={onLeave} className="likes">
          <img src={liked ? likeIcons.blackfilled : hovered} alt="like" />
          <div className={`likeCount ${liked ? "dark" : hoveredClass}`}>{likes}</div>
        </div>
      </div>
      <div className="header2">
        <div className="author">{props.author}</div>
        <div className="date">{props.date}</div>
      </div>
      <div className="body">{props.body}</div>
    </div>
  );
};

export default Post;
