function loadUser4(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser4(data))
}

function displayUser4(website){
    const ul =document.getElementById('ul-list3');
    for (const data of website){
        console.log(data.website);
     
    const li =document.createElement('li');
    li.innerText=data.website;
    ul.appendChild(li)
    
    }
}