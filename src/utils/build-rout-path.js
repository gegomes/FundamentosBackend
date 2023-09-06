export function buildRouterPath(path){
    const routerPath = /:([a-zA-Z]+)/g

    // encontra o : e id com letra  menusculo e maiusculo global 

    const pathWithParams = path.replaceAll(routerPath, '(?<$1>[a-z0-9\-_]+)')
    
    const pathRegex = new RegExp(`^${pathWithParams}`)
    return pathRegex

}