const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const PostSchema = new mongoose.Schema({
    title:String,
    content:String,
    summary:String,
    coverImg:String,
    author: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true,
})

const PostModel = model('Post', PostSchema);

module.exports = PostModel;