//async - 
//conquece

//  --functions are not excute based on they declared they 
//only they called

//cunsumer
// function display(value){
//     console.log(`This is value of sum -`+ value)
// }

//producer
// function add(num1,num2){
//     let sum = num1+num2;
//     function b(sum){
//           return sum
//     };
//     return b;
// }

// console.log(add(1,2)())

// const result = add('h',8);//in
// display(result)

//callabacks - 
// js - treats as first class citizes

// const a = fucntion(){

// }

// //
// function add(num1,num2){
//     let sum = num1+num2;
//     function b(){
//         console.log(sum)
//     }
//     return b;
// }

// // const result = add(1,2);
// function display(result){
//      console.log(result)
// }


// function add(num1,num2,dis){
//     let sum = api();//process
//     dis(sum);
// }

// add(3,4,display)

// promise


//syntax
// const myPromise = new Promise((resolve,reject)=>{
//    const response= fetch('https://pokeapi.co/api/v2/pokemon/ditto')

//    resolve(response)
// //    console.log(response)

// })


myPromise
.then((result)=> result.json(),)
.then((data)=> console.log(data))


const demo = document.getElementById('demo')
  function displayData(pokemon){
    console.log(pokemon)
    demo.innerHTML=`
    <h1>${pokemon.species.name}</h1>
   
    `
  }




   async function getData(){
         const res = await fetch('https://pokeapi.co/api/v2/pokemon/30')

        const data=await res.json()

        displayData(data)

    }

    getData()




