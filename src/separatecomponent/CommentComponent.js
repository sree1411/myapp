import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addcommnetBtn } from '../store/commentSlice';

const CommentComponent = () => {
  const [commentName, setCommentName] = useState({
    name: ""
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCommentName({ ...commentName, name: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(addcommnetBtn(commentName.name));
    setCommentName({
      name: ""
    });
  };

  return (
    <>
      <div className="form">
        <input type="text" value={commentName.name} onChange={handleChange} />
        <button onClick={handleSubmit}> Enter your comment </button>
      </div>
    </>
  );
};

export default CommentComponent;
