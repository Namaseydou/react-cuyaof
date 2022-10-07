import React from 'react';
import axios from 'axios';
import './style.css';

const baseURL = 'https://jsonplaceholder.typicode.com/posts/';
export default function App() {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((Response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: 'Hello Word!',
        body: 'This is a new post.',
      })
      .then((response) => {
        setPost(response.data);
      });
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post </button>
    </div>
  );
}
