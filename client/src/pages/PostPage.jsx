import React from "react";
import { useLocation } from "react-router-dom";
import { posts } from "../data";

function PostPage() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const post = posts.find((p) => p.id.toString() === path);
  return (
    <div className="post-page">
      <img src={post.img} alt="" className="post-img" />
      <h1 className="post-title">{post.title}</h1>
      <p className="post-description">{post.desc}</p>
      <p className="post-long">{post.longDesc}</p>
    </div>
  );
}

export default PostPage;
