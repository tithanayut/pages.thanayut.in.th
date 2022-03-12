import { useState, useEffect } from "react";
import { PostMetadata } from "../interfaces/PostMetadata";

const useIndex = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [index, setIndex] = useState<PostMetadata[]>([]);

  useEffect(() => {
    const fetchIndex = async () => {
      setLoading(true);

      const res = await fetch("/contents/index.json");
      const data = await res.json();
      setIndex(data.posts);

      setLoading(false);
    };
    fetchIndex();
  }, []);

  return { loading, index };
};

export default useIndex;
