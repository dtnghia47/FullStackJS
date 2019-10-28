const Post = require('../controllers/post');

// need read document monggodb generate data 10000 record
async function createPost() {
    try {
        await Post.insertData();
    } catch (err) { }
}

createPost()