export function extractQueryParams(query){

    return query.substr(1).split('&').reduce((queryparams, params) =>{
        const [key, value] = params.split('=')
        queryparams[key] = value

        return queryparams
    }, {})

}