const express = require('express');
const router = express.Router();
let APIHandlers = require('./api_handler');

//create new post
router.route('/create').post(APIHandlers.createPost);
//get all posts
// router.route('/posts').get(APIHandlers.getAllPosts);

module.exports = router;
