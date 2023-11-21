import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./main/Home.js";
import TVdrama from "./main/TVdrama.js";
import Counter from "./main/Counter.js";
import Search from "./main/Search.js";
import Search2 from "./main/Search2.js";

import { dummy } from './movieDummy';



function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">홈</Link> | <Link to="/TVdrama">TV드라마</Link> | 
        <Link to="/Counter">Counter</Link> |
        <Link to="/search">검색</Link> | 
        <Link to="/search2">검색2</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TVdrama" element={<TVdrama />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search2" element={<Search2 />} />
      </Routes>
    </div>
  );
}

export default App;
