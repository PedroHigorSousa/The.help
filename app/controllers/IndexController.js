import database from '../database/datas'

const countOpenCalls = (datas) => {
    const open_calls = datas.filter(call => {
        return call.status == 'Aguardando'
    })

    return open_calls.length
}

class IndexController {
    Home(req, res) {

        const datas_index = {
            'calls': database,
            'open_calls': countOpenCalls(database),
            'title': 'The.help'

        }

        return res.render('index', { datas_index })
    }
}

module.exports = new IndexController()