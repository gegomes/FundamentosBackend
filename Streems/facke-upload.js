import {Readable} from 'node:stream'

class OneToHundredStreen extends Readable {
    index = 1
    _read(){
        const i = this.index++

       setTimeout(() => {
        if( i > 5){
            this.push(null)
        }
        else {
            const buf = Buffer.from(String(i))
            this.push(buf)

        }
       }, 500)
    }
}


fetch('http://localhost:2000', {
  
    method: 'POST',
    body: new OneToHundredStreen(),
    duplex: 'half' // adicione essa linha para versao mais recente do node 
}).then(resp =>{
    return  resp.text()
}).then(data => console.log(data))