import { useState, useEffect } from "react";
import { PostInfo } from "../interfaces/PostInfo";

const useIndex = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [index, setIndex] = useState<PostInfo[]>([]);

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
