//first = dyamic render the pokemon;
// click button random pokemon




function getUrl(){
const num = Math.floor(Math.random()*10)
const apiUrl = `https://fakestoreapi.com/products/${num}`
getCart(apiUrl)
}


async function getCart(url){
    const res = await fetch(url)
    const data = await res.json();
    displayCart(data);
    console.log(data)

}


const card = document.querySelector('.card');



const displayCart =(data)=>{
    const {title,image,price}=data
	

    console.log(title,image,price)
    card.innerHTML =
    `
       <img src=${image} alt="pokimon image">
        <h1>${title}</h1>
        <h5>Price:${price}</h5>
       
    `
}











