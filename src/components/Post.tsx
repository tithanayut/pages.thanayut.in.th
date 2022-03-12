import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Container from "./Container";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import Alert from "./Alert";
import useContent from "../hooks/useContent";

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
      <Container>
        <h2 className="border-b-2 text-3xl">
          <Link to={`/posts/${content.metadata.slug}`}>{content.metadata.title}</Link>
        </h2>
        <h6 className="my-2 text-gray-600">{content.metadata.date}</h6>
      </Container>

      <Container>
        <div className="prose mt-[-12px] max-w-[100%]">
          <ReactMarkdown linkTarget="_blank" remarkPlugins={[remarkGfm]}>
            {content.content}
          </ReactMarkdown>
        </div>
      </Container>
    </main>
  );
};

export default Post;
