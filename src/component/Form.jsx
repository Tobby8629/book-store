import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/feature/books/Bookslice';

function Form() {
  const [tate, settate] = useState({ title: '', author: '', item_id: '' });
  const dispatch = useDispatch();
  const handleadd = (e) => {
    e.preventDefault();
    if (tate.title === '' || tate.author === '') {
      return;
    }
    dispatch(addBook(tate));
    settate({
      title: '',
      author: '',
    });
  };
  return (
    <div className="all">
      <h2 className="addh2">ADD NEW BOOK</h2>
      <form onSubmit={handleadd}>
        <input type="text" placeholder="Book title" id="book" value={tate.title} onChange={(e) => settate({ ...tate, title: e.target.value })} />
        <input type="text" placeholder="author" id="author" value={tate.author} onChange={(e) => settate({ ...tate, author: e.target.value, item_id: `item${Math.floor(Math.random() * 1000)}` })} />
        <button className="add" type="submit">ADD BOOK</button>
      </form>
    </div>

  );
}

export default Form;
