import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { categoryBook, deleteapi } from '../redux/books/Bookslice';

function Bookeach({
  title, author, id, category,
}) {
  const dispatch = useDispatch();
  const handledelete = (num) => {
    dispatch(deleteapi({ id: num }));
  };
  const handlefilter = (cat) => {
    dispatch(categoryBook({ catego: cat }));
  };

  return (
    <div className="books">
      <div className="book">
        <h4>book genre</h4>
        <h3>{title}</h3>
        <p>{author}</p>
      </div>

      <div className="btns">
        <button type="submit">comments</button>
        <button type="submit" onClick={() => { handledelete(id); }}>remove</button>
        <button type="submit" onClick={() => { handlefilter(category); }}> filter catergory </button>
      </div>
    </div>
  );
}

Bookeach.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Bookeach;
