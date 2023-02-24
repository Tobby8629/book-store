import './book.css';
import Bookeach from './Bookeach';

function Book() {
  const book = [{ title: 'Things fall apart', author: 'chinua achebe', id: 1 },
    { title: 'Things fall apart', author: 'chinua achebe', id: 4 },
    { title: 'Things fall apart', author: 'chinua achebe', id: 2 },
    { title: 'Things fall apart', author: 'chinua achebe', id: 3 }];
  return (
    <div className="all">
      {book.map((book) => (
        <Bookeach key={book.id} title={book.title} author={book.author} />
      ))}
    </div>
  );
}

export default Book;
