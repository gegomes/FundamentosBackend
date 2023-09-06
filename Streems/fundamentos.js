// importacao de clientes via csv (excel)
//  toda porta de entrada e saida é um streens
// process.stdin de leitura 

// process.stdout de escrita


import {Readable, Writable, Transform} from 'node:stream'

class OneToHundredStreen extends Readable {
    index = 1
    _read(){
        const i = this.index++

        if( i > 100){
            this.push(null)
        }
        else {
            const buf = Buffer.from(String(i))
            this.push(buf)

        }
    }
}


class MutiplayByTenStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10);
        callback()
    }
}

class InvertNumberStream extends Transform {

    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString() * -1)
        callback(null, Buffer.from(String(transformed)))
    }
}




new OneToHundredStreen()
.pipe(new InvertNumberStream())
.pipe( new MutiplayByTenStream())