

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=YXyCG53XRfqDoBcy16i8lraHyi72KAJC`;
    const resp = await fetch(url);
    const {data}  = await resp.json();
    //? para preguntar si el endpoit devuelve información
    const gifs = data.map( img => {
        return {
            id    : img.id,
            title : img.title,
            url   : img.images?.downsized_medium.url
        }
    }); 

    //console.log(gifs);
    return gifs;    
}
