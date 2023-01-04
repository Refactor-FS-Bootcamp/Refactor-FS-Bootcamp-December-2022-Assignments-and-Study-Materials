// array - object 

// const num = [92000,23000,0,4500,6500,43000]

// const [jan,feb,,march,apirl,may]=num

// console.log(jan,feb,may,march,apirl)


// function calculator(a,b){
//     //add
//        let sum =a+b;
//     //sub
//     let sub = a-b;
//     //mul
//      let mul= a*b;

//     return [sum,sub,mul]
// }

// const [add,sub,mul] = calculator(12,17)

// console.log(add,sub,mul)


//object:

// const person = {
//     name:'Hari',
//     age:'25',
//     isExperienced:true,
//     skils:['html','css',{
//         hi:true
//     }],
//     detail(){
// //         return ` my name is ${person.name}`;
// //     }
// // }


// // const {name:personName,age,isExperienced,detail}=person

// // console.log(age)

// // console.log(name)

// // const {skils:sk}=person

// // console.log(sk)

// //spreed and rest 

// const age = [0,1,2,1,3,2,32,4,23,4,3,3,534,5,34,543,5,43,5,435,34,5,345,43,54,35,43,5,435,4,54,3,435,43,5,435,435,]


// let age2 = [1,2,3,...age]

// console.log(age2)


// const obj = {
//     name:'hari',
//     age:29,
//     eyeColor:'yellow'
// }

// const obj2={
//     DOB:'29-10-1999',
//     eyeColor:'red'
// }

// const person={
//     ...obj2,...obj
// }

// console.log(person)


// function max(age){
// console.log(...age)
//   console.log(Math.min(...age))
// }

// max(age)

// ... ,...

//[]=initi

//init=[]

// const a =[1,2,23,23,2,3,2,23]

// const [d,f,g,h,j,k,...rem]=a;
// console.log(d,f,g,h,j,k,rem)




// for(let i=1;i <num.length;i++){
//     console.log(num[i]*2)
// }

//iteratr,forEach
// const dblarr=[];

// num.forEach((item)=>{
//     dblarr.push(item*2) 
// })

// console.log(dblarr)

// const dbarr1=num.map(function(item){
//     return  item*2*4
// })
// console.log(dbarr1)

// const num = [
//    {
//     name:'barby',
//     cat:'toys'
//    }

// ,{
//     name:'lenova',
//     cat:'laptop'
// },
// {
//     name:'transformer',
//     cat:'toys'
// }
// ];

// let value = num.filter((val)=>{
//    return  val.cat === 'toys'
// })

// console.log(value)

// const income = [12000,32000,45000,55000];


// const annual =income.reduce((acc,cum)=>{
//     console.log(acc)
//     return acc+cum

// },)

// console.log(annual)


const num = [1,2,4,-1,23,23,4,234,32]

const result = num.every((val)=>{
    return val >0;
})

console.log(result)