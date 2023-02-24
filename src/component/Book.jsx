import './book.css';

function Book() {
  const book = [{ title: 'Things fall apart', author: 'chinua achebe', id: 1 },
    { title: 'Things fall apart', author: 'chinua achebe', id: 1 },
    { title: 'Things fall apart', author: 'chinua achebe', id: 1 },
    { title: 'Things fall apart', author: 'chinua achebe', id: 1 }];
  return (
    <div className="all">
      {book.map((book) => (
        <div className="books" key={book.id}>
          <div className="book">
            <h4>book genre</h4>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>

          <div className="btns">
            <button type="submit">comments</button>
            <button type="submit">remove</button>
            <button type="submit">Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Book;
