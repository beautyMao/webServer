/**
 * Created by jhpanc on 2018/9/21.
 */
let http = require('http')

let server = http.createServer((req, res) => {
        res.end('hello world')
})

server.listen(4000)