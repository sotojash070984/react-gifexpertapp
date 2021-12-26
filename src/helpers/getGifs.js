export const getGifs=async(categoria)=>{
    const url=`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categoria)}&limit=10&api_key=m22HAJjzaYzNlielcp0gdDTNFjzznh9Z`;
    const respuesta= await fetch(url);
    const {data}= await respuesta.json();
    const gifs=data.map(img=>{
        return{
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })
    return gifs;
}