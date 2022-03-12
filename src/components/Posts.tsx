import Container from "./Container";
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
        <Container href={`/posts/${post.slug}`} key={post.slug}>
          <h2 className="border-b-2 text-3xl">{post.title}</h2>
          <h6 className="my-2 text-gray-600">{post.date}</h6>
        </Container>
      ))}
    </main>
  );
};

export default Posts;
