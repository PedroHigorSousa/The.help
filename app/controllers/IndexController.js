class IndexController {
    Home(req, res) {
        const datas = {
            "title": "The help"
        }

        return res.render('index', datas)
    }
}

module.exports = new IndexController()