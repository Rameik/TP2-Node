let miUrl = null;
let miObjeto = null;
miUrl = 'sdfsdfsdf';
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);

function parsearUrl(laURL){
    let objeto = null;
    try {
        let Url = new URL(laURL);
        let host = Url.host
        let path = Url.pathname
        let params = Url.searchParams
        objeto = {
            "host": host,
            "pathname" : path,
            "parametros" : params
        }
    } catch (error) {
        console.log(`Ocurrio un error: ${error}`)
    }
    
    return objeto
}