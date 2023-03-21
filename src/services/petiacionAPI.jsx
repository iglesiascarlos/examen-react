
const apiKey = 'IHAEqEb6jbnCa2uTebuCNDrXTm16awAn';

export default function petiacionAPI({keyword = 'marvel'} = {}, {limit = 16} = {}){
    
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`;

    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
        const {data} = response
        const gifs = data.map(image => image.images.downsized_medium.url)
        return(gifs)
    });
}