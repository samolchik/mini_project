
const urlPost = new URL(location.href);
const post = JSON.parse(urlPost.searchParams.get('post'));

const containerPost = document.querySelector('.container-post');

containerPost.innerHTML = `
              <div class="post-info">
                  <h2><span>title:</span>${post.title}</h2>
                  <p>user id: ${post.userId} & post id: ${post.id}</p>
                  <p class="body-post">${post.body}</p>
              </div>`;
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(res => res.json())
    .then(comments => {

        const commentsDiv = document.createElement('div');
        commentsDiv.classList.add('comments');

        for (const comment of comments) {

            const commentItem = document.createElement('div');
            commentItem.classList.add('comment');
            commentItem.innerHTML += `
                  <h4>${comment.name}</h4>
                  <p>${comment.body}</p>
                  <address><i class="fa-regular fa-envelope grey"></i> ${comment.email}</address>`;

            commentsDiv.appendChild(commentItem);
        }

        containerPost.appendChild(commentsDiv);
    });



