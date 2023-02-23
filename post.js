function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(posts){
    const postContainer=document.getElementById('post-container');

    for (const post of posts){

        const postDiv=document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML=`
         <h4>userId-${post.userId}</h4>
         <h4>Id-${post.id}</h4>
         <h5>Post-Tilte:${post.title}</h5>
         <p>Post Description:${post.body}</p>
        `;
        postContainer.appendChild(postDiv);
    }
}

loadPost();