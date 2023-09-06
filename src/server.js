import http from 'node:http' // modulo interno 
import { json } from './middlewares/json.js'
import { routes } from './routes.js'
import { extractQueryParams } from './utils/extract-query-params.js'

// **Metods**

// get, post, put, delete, patch

// Get => buscar informação do backend
// post criar alguma informação no backend 
//  put para atualizar um recurso do backend 
// patch atualizar uma rota especifica do backend
// Delete deletar recurso do backend

// JSON para representar array objetos entre outros 

// cabechalhos (Requisção quanto responstas)  sao metadados

// http status code 




const server = http.createServer(async (req, res) => {

    const { method, url } = req

    await json(req, res)

    const route = routes.find(route => {

     return   route.method === method && route.path.test(url)

    })


    if(route){

        const routerParams = req.url.match(route.path)


        const { query, ...params} = routerParams.groups

        
        req.params = params
        req.query = query ? extractQueryParams(query) : {}  // condicao caso seja vazio retorna  {}

        return route.handler(req, res)

    }
    return res.writeHead(404).end()
})

server.listen(3333)  // porta de entrada 





