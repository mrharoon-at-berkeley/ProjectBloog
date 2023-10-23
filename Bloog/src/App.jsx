import React, { useState } from 'react';
import HomePage from './HomePage';
import './styles.css';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (title, content, directory) => {
    const newPost = { id: Date.now(), title, content, directory };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="app">
      <Header />
      <HomePage />
      <Body posts={posts} onAddPost={addPost} />
      <Footer />
    </div>
  );
}

function Header() {
  return <header>My Blog Header</header>;
}

function Body({ posts, onAddPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [directory, setDirectory] = useState('General');

  const handleSubmit = () => {
    onAddPost(title, content, directory);
    setTitle('');
    setContent('');
  };

  return (
    <main>
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post Content"
        />
        <select value={directory} onChange={(e) => setDirectory(e.target.value)}>
          <option value="General">General</option>
          <option value="Tech">Tech</option>
          <option value="Lifestyle">Lifestyle</option>
          {/* Add more directories as needed */}
        </select>
        <button onClick={handleSubmit}>Add Post</button>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title} ({post.directory})</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

function Footer() {
  return <footer>Blog Footer</footer>;
}

export default App;

