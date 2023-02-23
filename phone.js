function loadUser6(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => display7(data))
}

function display7(phone){
    const ul =document.getElementById('ul-list5');

    for ( const datas of phone){
        console.log(datas.phone);
        const li =document.createElement('li');
        li.innerHTML=`
        <h4>user-${datas.name},Phone-${datas.phone}</h4>
        `
        ul.appendChild(li)
    }
}