const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    hub: {
        type: Schema.Types.ObjectId,
        ref: "Hub"
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]
},{ timestamps: true })

module.exports = mongoose.model('Post', PostSchema)