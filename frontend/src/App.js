import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PostList from './components/Posts/PostList';
import CreatePost from './components/Posts/CreatePost';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/posts" component={PostList} />
          <Route path="/create-post" component={CreatePost} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
