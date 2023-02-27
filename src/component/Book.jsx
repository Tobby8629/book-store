import { useSelector } from 'react-redux';
import './book.css';
import Bookeach from './Bookeach';

function Book() {
  const book = useSelector((state) => state.Book.books);

  return (
    <div className="all">
      {book.map((book) => (
        <Bookeach
          key={book.item_id}
          title={book.title}
          author={book.author}
          id={book.item_id}
          category={book.category}
        />
      ))}
    </div>
  );
}

export default Book;
