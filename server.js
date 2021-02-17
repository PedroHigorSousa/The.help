import server from './app'

server.listen(3000, () => {
    console.log('Server is running ...')
    console.log(`http://127.0.0.1:3000`)
})