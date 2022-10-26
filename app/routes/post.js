
module.exports = async (app) => {

    app.get('/post/:postID', async (req, res) => {

        const request = await app.app.controllers.requestController;
        let postID = req.params.postID;

        if (postID == null) {
            postID = 1;
        }

        let postObject = [];
        let author;
        let authorID;
        let userId;

        request.posts.forEach(post => {
            if (post.id == postID) {
                postObject.push(post);
                authorID = post.userId;
                userId = postObject[0].userId
            }
            request.users.forEach(user => {
                if (userId == user.id) {
                    authorID = userId;
                    author = user.name
                }
            });
        });

        res.render("posts/post", { post: await postObject[0], author: author, authorID: authorID });

    })
}