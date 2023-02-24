import React from 'react';

function Form() {
  return (
    <div className="all">
      <h2 className="addh2">ADD NEW BOOK</h2>
      <form>
        <input type="text" placeholder="Book title" id="book" />
        <input type="text" placeholder="author" id="author" />
        <button className="add" type="submit">ADD BOOK</button>
      </form>
    </div>

  );
}

export default Form;
