const url = new URL(location.href);
const user = JSON.parse(url.searchParams.get('data'));

const userContent = document.querySelector('.user-content');

userContent.innerHTML = `
                  <p><i class="fa-regular fa-circle-user"></i></p>
                  <h1 class="font-effect-shadow-multiple"> ${user.name} ${user.username}</h1>
                  <h4>id: ${user.id}</h4>
                  <div class="user-company">
                      <span>company:</span> ${user.company.name}l</h3>
                      <h4><span>slogan:</span> ${user.company.catchPhrase}l</h4>
                      <h4><span>bs:</span> ${user.company.bs}l</h4>
                  </div>
                  <div>      
                      <p><i class="fa-solid fa-phone grey"></i> ${user.phone}</p>
                      <address><i class="fa-regular fa-envelope grey"></i> ${user.email}</address>
                      <p><i class="fa-solid fa-globe grey"></i> ${user.website}</p>
                      <address><i class="fa-solid fa-address-book grey"></i> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</address>
                      <p><i class="fa-solid fa-location-dot grey"></i> ${user.address.geo.lat} & ${user.address.geo.lng}</p>
                  </div>`;

fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(res => res.json())
    .then(posts => {

        const postsDiv = document.querySelector('.posts');

        for (const post of posts) {

            const postItem = document.createElement('div');
            postItem.classList.add('post');
            postItem.innerText = post.title;

            const btnPost = document.createElement('div');
            btnPost.innerText = 'MORE DETAILS';

            const link = document.createElement('a');
            link.classList.add('btn-post');
            link.target = '_blank';
            link.href = '../../pages/PostDetails/post-details.html?post=' + JSON.stringify(post);

            link.appendChild(btnPost);
            postItem.appendChild(link);
            postsDiv.appendChild(postItem);
        }

        const buttonId = document.getElementById('button');
        const togglePosts = () => {
            postsDiv.classList.toggle('toggle');
        };

        buttonId.addEventListener("click", togglePosts);
    });



