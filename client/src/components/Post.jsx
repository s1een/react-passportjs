import React from "react";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <div className="post">
      <Link to={`/post/${post.id}`}>
        <span className="title">{post.title}</span>
        <img src={post.img} alt="" className="img" />
        <p className="description">{post.desc}</p>
        <button className="post-btn">ReadMore</button>
      </Link>
    </div>
  );
}

export default Post;
