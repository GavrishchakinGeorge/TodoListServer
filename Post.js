import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    task: String, 
    isCheck: Boolean, 
});

export default mongoose.model('posts', postSchema);
