import React from 'react';
import { propTypes } from 'prop-types';

function Bookeach({ title, author, id }) {
  return (
    <div className="books" key={id}>
      <div className="book">
        <h4>book genre</h4>
        <h3>{title}</h3>
        <p>{author}</p>
      </div>

      <div className="btns">
        <button type="submit">comments</button>
        <button type="submit">remove</button>
        <button type="submit">Edit</button>
      </div>
    </div>
  );
}

Bookeach.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
};

export default Bookeach;
