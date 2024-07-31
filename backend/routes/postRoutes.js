const express = require('express');
const { createPost, getPosts, getPostById } = require('../controllers/postController');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

router.post('/posts', verifyToken, createPost);
router.get('/posts', getPosts);
router.get('/posts/:id', getPostById);

module.exports = router;
