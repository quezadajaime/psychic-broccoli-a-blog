const router = require("express").Router();
const { BlogPost, Comment, User } = require("../../models");

//creates a comment
router.post("/", async (req, res) => {
    try {
        console.log("No way!");
        const comment = await Comment.create({
            comment_body: req.body.comment_body,
            blogPost_id: req.body.blogPost_id,
            user_id: req.session.user_id || req.body.user_id,
        });

        res.status(200).json(comment);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

//reads all comments
router.get("/", async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username"],
                },
                {
                    model: blogPost,
                    attributes: ["id"],
                },
            ],
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//updates the comment
router.put("/:id", async (res, res) => {
    try {
        const updatedComment = await Comment.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!updatedComment[0]) {
            res.status(400).json({ message: "No comment found with that ID" });
            return;
        }

        console.log("Comment updated");
        res.status(200).json(updatedComment);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

//Delete a comment
router.delete("/:id", async (req, res) => {
    try {
        const comment = await Comment.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!comment) {
            res.status(404).json({ message: "No comment found with that ID" });
            return;
        }
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;