const jsonServer = require('json-server');
const db = require('../server/db.json');
const server = jsonServer.create();
const router = jsonServer.router('../server/db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

server.post('/users/pick-receiver', (req, res) => {
        // let name = req.body['name'];
        // let giftId = req.body['giftId'];
        // let secretSantaId = req.body['secretSantaId'];

        let result = db.users.find(user => {
            return user.secretSantaId == null;
        });

        if (result) {
            let user = result;
            res.status(200).jsonp(user);
        } else {
            res.status(400).jsonp({
                error: "Something went wrong"
            });
        }
});


// Use default router
server.use(router);
server.listen(4000, () => {
    console.log('JSON Server is running')
});
