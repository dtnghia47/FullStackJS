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

async function insertData() {
    var data = [
        {
            title: 'demo title 1',
            description: 'desc 1'
        },
        {
            title: 'demo title 2',
            description: 'desc 2'
        },
        {
            title: 'demo title 3',
            description: 'desc 3'
        },
        {
            title: 'demo title 4',
            description: 'desc 4'
        },
        {
            title: 'demo title 5',
            description: 'desc 5'
        },
        {
            title: 'demo title 6',
            description: 'desc 6'
        },
        {
            title: 'demo title 7',
            description: 'desc 7'
        },
        {
            title: 'demo title 8',
            description: 'desc 8'
        },
        {
            title: 'demo title 9',
            description: 'desc 9'
        }
    ];
    // Post.insert(data, (err, result) => {
    //     if (err) {
    //         return console.error(err);
    //     } else {
    //         console.log("Multiple documents inserted to Collection");
    //     }
    // });
}


module.exports = {
    createPost,
    deletePost,
    getAllPosts,
    insertData
};