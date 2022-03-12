import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import useContent from "../hooks/useContent";
import Alert from "./Alert";

const Post = () => {
  const params = useParams();
  const { loading, error, content } = useContent(params.slug as string);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Alert message={error} />;
  }

  return (
    <main className="my-6 flex flex-col items-center space-y-6 md:my-10">
      <article className="w-[90%] rounded-lg bg-[#e8e8e8] p-8 md:w-[80%] lg:w-[70%]">
        <h2 className="border-b-2 text-3xl">
          <Link to={`/posts/${content.metadata.slug}`}>{content.metadata.title}</Link>
        </h2>
        <h6 className="mt-1 mb-6 text-sm text-gray-600">{content.metadata.date}</h6>

        <div className="prose max-w-[100%]">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
};

export default Post;
