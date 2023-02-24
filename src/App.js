import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './component/nav';
import Bookpage from './component/Bookpage';
import Categories from './component/Categories';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Bookpage />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
