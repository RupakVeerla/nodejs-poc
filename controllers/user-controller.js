const express = require("express")
const router = express.Router()
let users = require("../repo/users.js")
let urlencodedParser = express.urlencoded({ extended: false })

router.get("/", async (req, res) => {
    res.status(200)
    res.json(users)
})

router.post("/", urlencodedParser, async (req, res) => {
    let user = {
        id: req.body.id,
        name: req.body.name
    }
    users.push(user)
    res.sendStatus(200)
})

module.exports = router