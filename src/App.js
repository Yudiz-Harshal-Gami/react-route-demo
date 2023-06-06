import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Home } from './Component/Home';
import { About } from './Component/About';
import { Navbar } from './Component/Navbar';
import Featured from './Component/Featured';
import Trending from './Component/Trending';
import Famous from './Component/Famous';
import NoMatch from './Component/NoMatch';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='featured' element={<Featured />}>
          <Route index element={<Trending />}></Route>
          <Route path='latest' element={<Trending />}></Route>
          <Route path='famous' element={<Famous />}></Route>
        </Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
