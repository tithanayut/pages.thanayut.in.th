import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import useIndex from "../hooks/useIndex";

const Posts = () => {
  const { loading, index } = useIndex();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <main className="my-6 flex flex-col items-center space-y-6 md:my-10">
      {index.map((post) => (
        <article className="w-[90%] rounded-lg bg-[#e8e8e8] p-8 md:w-[80%] lg:w-[70%]">
          <h2 className="border-b-2 text-3xl">
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
          <h6 className="my-2 text-gray-600">{post.date}</h6>
        </article>
      ))}
    </main>
  );
};

export default Posts;
