import React from "react";

export const BlogComponent = ({ blog }) => {
  return (
    <div className="blog">
      <h3>{blog.title}</h3>
      <p>{blog.body}</p>
    </div>
  );
};
