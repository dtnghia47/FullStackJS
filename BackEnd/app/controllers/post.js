const Post = require('../models/post');

/**
 * Create new post
 * @param {*} req 
 * @param {*} res 
 */
async function createPost(postData) {
    let newPost = new Post({
        title: postData.title,
        description: postData.description
    });

    let post = await new Promise((resolve, reject) => {
        newPost.save((err, result) => {
            if (err) return reject(err);
            return resolve(result);
        });
    });
    return post;
}

/**
 * Delete post
 * @param {*} req 
 * @param {*} res 
 */
async function deletePost(postID) {
    let post = await new Promise((resolve, reject) => {
        Post.deleteOne({ post_id: postID }, (err, result) => {
            if (err) return reject(err);
            return resolve(result);
        });
    });
    return post;
}

/**
 * Get all posts
 * @param {*} req 
 * @param {*} res 
 */
async function getAllPosts() {
    let posts = await new Promise((resolve, reject) => {
        Post.find({}, (err, result) => {
            if (err) return reject(err);
            return resolve(result);
        });
    });
    return posts;
}

module.exports = {
    createPost,
    deletePost,
    getAllPosts
};
