import React, { useState } from "react"; 
import Button from './button'

 const PostCommentComp = ({ post, selected}) => {
  const [comment, setComment] = useState('');
  const postComment = () => {
    comment.trim().length ? post(comment,selected) : alert('please enter comment before posting')
    setComment('')
  }
    return (
     <div className='row'>

        <div className='col-md-8'>
        <textarea
          value={comment}
          className="postText"
          placeholder="comment here"
          onChange={ev => setComment(ev.target.value)}
        />
        </div>
        <div className='col-md-4 MarginTop'>
        <Button onClickFunction={() => postComment()} label="comment" />   
        </div>
     </div>
    );
  };

  export default PostCommentComp