import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Navbar from "./components/Navbar";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setRead] = useState(0);

  const handleRead = (read, id) => {
    const newReadtime = readingTime + read;
    setRead(newReadtime);
    const reminingBook = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(reminingBook);
  };

  const handleBookAdd = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <div className=" md:flex gap-3 mt-10">
        <Blogs handleBookAdd={handleBookAdd} handleRead={handleRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
