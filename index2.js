function loadUser3(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser3(data))
}

function displayUser3(username){
    const ul=document.getElementById('ul-list2')
     for (const data of username){
        console.log(data.email);
        const li=document.createElement('li')
        li.innerText=data.email
        ul.appendChild(li)
     }
}
