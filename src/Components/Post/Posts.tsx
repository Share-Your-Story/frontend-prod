import React, { useState, ReactElement, useEffect } from "react";
import Post from "./Post";
import "../../Css/Post/Posts.css";
import { postsProps } from "../../Types/Posts";

const Posts = (props: postsProps) => {
  const [postArray, setPostArray] = useState<Array<ReactElement>>([]);
  //format posts
  useEffect(() => {
    let i: number = 1;
    let elemArr: Array<ReactElement> = [];
    props.posts?.forEach((e) => {
      let elem: ReactElement = (
        <Post
          _id={e._id}
          date={e.createdAt.slice(0, 10)}
          author={e.author.displayName}
          title={e.title}
          likes={e.likes as number}
          liked={e.likesData?.includes(props.username) as boolean}
          body={e.body}
          key={i}
        />
      );
      elemArr.push(elem);
      i++;
    });
    setPostArray(elemArr);
  }, [props.posts, props.username]);

  return <div className="posts">{postArray}</div>;
};

export default Posts;
