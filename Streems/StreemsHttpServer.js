import http from 'node:http'
import { Transform } from 'node:stream'


class InvertNumberStream extends Transform {

    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString() * -1)
        console.log(transformed)
        callback(null, Buffer.from(String(transformed)))

    }
}


const server = http.createServer( async(req, res) => {


    const buff = []

    for await (const ch of req ){
        buff.push(ch)
    }

    const fullStreamsContext = Buffer.concat(buff).toString()

    console.log(fullStreamsContext)

    return res.end(fullStreamsContext)
    
//     return req
//     .pipe(new InvertNumberStream())
//     .pipe(res)
})

server.listen(2000)