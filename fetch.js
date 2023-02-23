// const url= 'https://jsonplaceholder.typicode.com/todos/1';

// fetch(url)
//  .than(Response => Response.json())
//  .than(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// fetch ('https://jsonplaceholder.typicode.com/todos/1')
//     .then(Response => Response.json())
//     .then(json => console.log(json))

function jsonClick() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'

    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}