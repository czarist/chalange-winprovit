module.exports = async (app) => {

    app.get('/', async (req, res) => {

        const request = await app.app.controllers.requestController;

        res.render("home/index", { users: await request.users });
    })

}