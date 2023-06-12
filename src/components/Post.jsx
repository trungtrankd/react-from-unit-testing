import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function Post() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      setPost(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="row">
      <div className="col">
        {loading ? (
          <div data-testid="loading" aria-label="loading">
            Loading...
          </div>
        ) : (
          <div data-testid="post-content">
            <h2 data-testid="post-title">{post.title}</h2>
            <p data-testid="post-body">{post.body}</p>
          </div>
        )}
      </div>
    </div>
  );
}
