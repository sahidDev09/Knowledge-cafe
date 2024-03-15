/* eslint-disable react/prop-types */

const SingleBookmark = ({ bookmarks }) => {
  const { title } = bookmarks;
  return (
    <div className="border border-blue-100 p-4 my-3 rounded-md bg-white">
      <h1 className=" text-xl font-bold">{title}</h1>
    </div>
  );
};

export default SingleBookmark;
