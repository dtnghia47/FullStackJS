var mongoose = require('./../store/mongo_store');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.siphtor);

/**
 * Post Schema
 */
const postSchema = new Schema({
    post_id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
    },
    description: {
        type: String
    },
}, { collection: 'Post' });


// auto render key
postSchema.plugin(autoIncrement.plugin, {
    model: 'Post',
    field: 'post_id',
    startAt: 1
});

let Post = mongoose.siphtor.model('Post', postSchema);

module.exports = Post;
