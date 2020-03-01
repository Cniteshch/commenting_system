import React from "react";
import PostCommentComp from "./postComment";
import SingleComment from "./singleComment";

export const Comment = ({ comments, post, selected }) => {
  return (
    <div className="">
      <div
        style={{ height: window.innerHeight - 250, overflow: "scroll" }}
        className="row blog"
      >
        <ol>
        {comments
          ? comments.map((comment, index) => {
              return <li>
                <SingleComment key={index} comment={comment} />
              </li>
            })
          : "loading..."}
          </ol>
      </div>
      <div>
        <PostCommentComp post={post} selected={selected} />
      </div>
    </div>
  );
};

export default Comment;
