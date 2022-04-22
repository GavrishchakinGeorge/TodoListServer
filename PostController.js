import Post from "./Post.js"

class PostController {
    async create(req, res) {
        try {
            const {task, isCheck} = req.body;
            const post = await Post.create({task, isCheck});
            res.json(post);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await Post.find();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    
    async update(req, res) {
        try {
            const post = req.body;
            const id = req.body._id;
            
            if (!id) {
                throw new Error('не указан ID');
            }

            const updatedPost = await Post.findByIdAndUpdate(id, post, {new: true});
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async delete(req, res) {
        try {
            const id = req.query.id;
            
            if (!id) {
                throw new Error('не указан ID');
            }

            const post = await Post.deleteOne({id});
            return res.json(post);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async deleteAll(req, res) {
        try {
            const post = await Post.deleteMany();
            return res.json(post);
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new PostController();
