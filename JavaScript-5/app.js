//vanilla - MerN
//react - library for 
//JQUERY- JSWITH DOM

// HTML CSS JS NODEJS MON.

//DOM- get event,where to place (ui)

// - js code  - 

// Dom- object - proptery, methods

//grabbing - single - multiple 
//1methods
//4methods

//id,class,tag.

// const head=document.getElementById('head')
// // console.log(head)


// // console.log(button)



// function change(){
//     const button = document.getElementById('btn')
//     button.innerHTML='Unsubscribe'
//     head.innerHTML='Welcome'

// }
//id single grabbing:
const head = document.getElementById('head')

//multiple - class.

const container = document.getElementsByClassName('container')



// console.log(container[0])

const para = document.getElementsByTagName('p')


const img = document.getElementsByTagName('img')

console.log(para[0])
function change(){
    console.log('hello')
    head.innerHTML='<em>Welcome</em>'
    container[0].style.backgroundColor='Orange'
    para[0].innerText='Hey Awesome'
    // img[0].src='https://media1.giphy.com/media/BgKEiHf1xNV0h6IcSX/200w.webp?cid=ecf05e47zt73jcrxltio0dqtb7zo2s6b1denl187zelnbahv&rid=200w.webp&ct=g'
   img[0].setAttribute('src','https://media1.giphy.com/media/BgKEiHf1xNV0h6IcSX/200w.webp?cid=ecf05e47zt73jcrxltio0dqtb7zo2s6b1denl187zelnbahv&rid=200w.webp&ct=g')

}