function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser2(data))
}

function  displayUser2(user){
   const ul =document.getElementById('ul-list');

   for (const data of user){
    console.log(data.name)
    const li =document.createElement('li')
    li.innerText=data.name
    ul.appendChild(li)

   }
}