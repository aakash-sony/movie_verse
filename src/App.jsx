import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Fire from "./assets/Fire01.png";
import Star from "./assets/Star01.png";
import Party from "./assets/party_face.png";
import MovieList from "./components/MovieList/MovieList";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MovieList type="popular" title="Popular" emoji={Fire} />
      <MovieList type="top_rated" title="Top Rated" emoji={Star} />
      <MovieList type="upcoming" title="Upcoming" emoji={Party} />
    </div>
  );
};

export default App;
