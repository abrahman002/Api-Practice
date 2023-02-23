function loadUser5(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => display5(data))
}

function display5(company){
        const ul=document.getElementById('ul-list4');
    for (const datas of company){
        console.log(datas.company.name);
    const li =document.createElement('li');
    li.innerText=datas.company.name;
    ul.appendChild(li)
    }
}