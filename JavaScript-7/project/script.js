// console.log('starts')

const dataPost = [
    {
        profilePic:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name:'Sneha',
        img:'./img.avif',
        post:'https://images.unsplash.com/photo-1499062918700-389fa905494e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsJTIwcGhvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        desc:'Travel makes me perfect'
    },
    {
        profilePic:'https://images.unsplash.com/photo-1513152697235-fe74c283646a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name:'Sankar',
        post:'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbCUyMHBob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        desc:'Travel to heaven'
    },
    {
        profilePic:'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name:'Nikil',
        post:'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwcGhvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        desc:' Solo Travel'
    }


]

//steps:
// fetch where to add -
//add thw data:
//ui

const container = document.querySelector('.container');



// dataPost.forEach(function(item){
    container.innerHTML +=`<div class="posts">
    <div class="profileInfo">
        <img src=${dataPost[0].img} alt="profileImg">
            <h2>${item.name}</h2>
    </div>
    <div class="post">
        <img src=${item.post} alt="postImg">
        <p>${item.desc}</p>
    </div>
    </div>`
// })



//fetch elem
//inter //
// event

const body =document.body;

const btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
    body.classList.toggle('dark');
})



