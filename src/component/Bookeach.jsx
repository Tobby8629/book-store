import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { categoryBook, deleteapi } from '../redux/books/Bookslice';
import 'react-circular-progressbar/dist/styles.css';

function Bookeach({
  title, author, id, category, index,
}) {
  const dispatch = useDispatch();

  const handledelete = (num) => {
    dispatch(deleteapi({ id: num }));
  };
  const handlefilter = (cat) => {
    dispatch(categoryBook({ catego: cat }));
  };

  const val = 64;

  return (
    <div className="books">
      <div className="left-book">
        <div className="book">
          <h4>book genre</h4>
          <h3>{title}</h3>
          <p>{author}</p>
        </div>

        <div className="btns">
          <button type="submit">comments</button>
          <button type="submit" onClick={() => { handledelete(id); }}>remove</button>
          <button type="submit" onClick={() => { handlefilter(category); }}> edit </button>
        </div>
      </div>
      <div className="right-book">
        <div className="circle-num">
          <div className="circle">
            <CircularProgressbar value={val} />
          </div>
          <div className="num">
            <p>
              {val}
              %
            </p>
            <p>completed</p>
          </div>
        </div>
        <div className="current-chap">
          <h2>CURRENT CHAPTER</h2>
          <p>
            chapter
            {index}
          </p>
          <button type="button" className="add">update progress</button>
        </div>
      </div>
    </div>

  );
}

Bookeach.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Bookeach;
