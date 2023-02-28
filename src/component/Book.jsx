import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookapi } from '../redux/books/Bookslice';
import './book.css';
import Bookeach from './Bookeach';

function Book() {
  const book = useSelector((state) => state.Book.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bookapi());
  }, [dispatch]);
  return (
    <div className="all">
      {book.map((book) => (
        <Bookeach
          key={book.id}
          title={book.title}
          author={book.author}
          id={book.id}
          category={book.category}
        />
      ))}
    </div>
  );
}

export default Book;
