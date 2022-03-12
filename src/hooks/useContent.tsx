import { useState, useEffect } from "react";
import { PostMetadata } from "../interfaces/PostMetadata";

const useContent = (slug: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [content, setContent] = useState<{ metadata: PostMetadata; content: string }>({
    metadata: { slug: "", title: "", date: "", filename: "" },
    content: "",
  });

  useEffect(() => {
    if (!slug) {
      return;
    }

    const fetchContent = async () => {
      setLoading(true);

      // Fetch Index
      const resIndex = await fetch(`/contents/index.json`);
      const index = await resIndex.json();

      const metadata = index.posts.find((p: PostMetadata) => p.slug === slug);
      if (!metadata) {
        setError("Content Not Found");
        setLoading(false);
        return;
      }

      // Fetch Content
      const resContent = await fetch(`/contents/${metadata.filename}`);
      const contentTxt = await resContent.text();

      setContent({ metadata, content: contentTxt });
      setLoading(false);
    };
    fetchContent();
  }, [slug]);

  return { loading, error, content };
};

export default useContent;
