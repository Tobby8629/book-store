import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [menu, setMenu] = useState(false);
  const changebar = () => { setMenu(!menu); };
  return (
    <nav>
      <div className="left">
        <div className="logo">
          <Link to="/"> BOOKSTORE CMS</Link>
        </div>

        <div className="menubar" onClick={changebar} onKeyDown={changebar} role="none">
          {menu ? <i className="fa-solid fa-x" /> : <i className="fa-solid fa-bars" /> }
        </div>

        <ul
          onClick={() => setMenu(false)}
          onKeyDown={() => setMenu(false)}
          role="none"
          className={menu ? 'show' : 'hide'}
        >
          <li>
            <Link to="/"> book </Link>
          </li>
          <li>
            <Link to="categories"> categories </Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <i className="fa-solid fa-user" />
      </div>
    </nav>
  );
}

export default Nav;
