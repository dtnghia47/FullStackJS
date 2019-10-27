const Post = require('../controllers/post');

/**
 * Create post
 * @param {*} req 
 * @param {*} res 
 */
async function createPost(req, res) {
    try {
        let post = await Post.createPost(req.body);
        let resData = {
            data: post,
            success: 1,
            error: {}
        };
        res.send(resData);
    } catch (err) {
        let resData = {
            data: {},
            success: 0,
            error: {
                message: err.message
            }
        };
        res.send(resData);
    }
}

/**
 * Delete post
 * @param {*} req 
 * @param {*} res 
 */
async function deletePost(req, res) {
    try {
        let postID = req.params.post_id;
        let post = await Post.deletePost(postID);
        let resData = {
            data: {
                message: "Deleted post successfully"
            },
            success: 1,
            error: {}
        };
        res.send(resData);
    } catch (err) {
        let resData = {
            data: {},
            success: 0,
            error: {
                message: err.message
            }
        };
        res.send(resData);
    }
}

/**
 * Get all posts
 * @param {*} req 
 * @param {*} res 
 */
async function getAllPosts(req, res) {
    try {
        let posts = await Post.getAllPosts();
        let resData = {
            data: posts,
            success: 1,
            error: {}
        };
        res.send(resData);
    } catch (err) {
        let resData = {
            data: {},
            success: 0,
            error: {
                message: err.message
            }
        };
        res.send(resData);
    }
}

module.exports = {
    createPost,
    deletePost,
    getAllPosts
};