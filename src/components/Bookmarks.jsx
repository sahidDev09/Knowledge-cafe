import SingleBookmark from "./SingleBookmark";

/* eslint-disable react/prop-types */
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3">
      <div className="bg-gray-100 p-5 mb-6 rounded-md">
        <div className=" border-2 border-blue-400 p-6 my-2 bg-blue-50 rounded-md">
          <h1 className=" text-xl font-bold text-blue-500 text-center">
            Spen time on read : {readingTime} min
          </h1>
        </div>
      </div>

      <div className=" bg-gray-100 p-5 rounded-md min-h-screen">
        <h1 className=" text-2xl font-bold">
          Bookmark Blogs : {bookmarks.length}
        </h1>
        <hr className=" my-4" />

        {bookmarks.map((bm) => (
          <SingleBookmark key={bookmarks.id} bookmarks={bm}></SingleBookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
