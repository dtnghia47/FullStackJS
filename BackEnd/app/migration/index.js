const Post = require('../controllers/post');

// need read document monggodb generate data 10000 record
async function createPost() {
    try {
        for (let i = 0; i < 5; i++) {
            console.log(i)
        }
        await Post.createPost();
    } catch (err) { }
}

createPost()