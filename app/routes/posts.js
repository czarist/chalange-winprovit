
module.exports = async (app) => {

    app.get('/posts/:userId', async (req, res) => {

        const request = await app.app.controllers.requestController;
        let userId = req.params.userId;

        if (userId == null) {
            userId = 1;
        }

        let userObject = [];

        request.unitedObject.forEach(user => {
            if (user.id == userId) {
                userObject.push(user);
            }
        });

        res.render("posts/posts", { unitedObject: await userObject[0] });

    })
}