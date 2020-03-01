import React from "react"; 

 const SingleCommentComponent = ({ comment}) => {
    return (
     <div className='comment'>
       <h3><i>{comment.selected}</i></h3>
    <p>{comment.body}</p>
    </div>
    );
  };

  export default SingleCommentComponent