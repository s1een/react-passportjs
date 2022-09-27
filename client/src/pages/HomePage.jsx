import React from "react";
import Post from "../components/Post";
import { posts } from "../data";
function HomePage() {
  return (
    <div className="home">
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
}

export default HomePage;
