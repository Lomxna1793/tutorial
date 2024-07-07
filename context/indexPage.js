const handlerBarsContext ={
    "/index.html":{
        "gallery": [
            {
                imgUrl:"public/COD.jpg"
            },
            {
                imgUrl:"public/Eaf.webp"
            },
            {
                imgUrl:"public/Elde.jpg"
            },
            {
                imgUrl:"public/Fall.jpg"
            },
            {
                imgUrl:"public/Fifa23.jpg"
            },
            {
                imgUrl:"public/Fort.jpg"
            },
            {
                imgUrl:"public/NBA.avif"
            },
            {
                imgUrl:"public/Red.jpg"
            },
            {
                imgUrl:"public/OW.jpg"
            },
            {
                imgUrl:"public/Far.jpg"
            },
            {
                imgUrl:"public/Lies.jpg"
            },
            {
                imgUrl:"public/Skyrim.jpg"
            },
            {
                imgUrl:"public/Spiderman.avif"
            },
            {
                imgUrl:"public/Rock.jpg"
            },
            {
                imgUrl:"public/Hor.webp"
            }
        ]
    },
}
 
const pageContext = (page)=>{
    const context = {...handlerBarsContext[page]}
    return context;
}
export default pageContext;
