fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {

        const mainContainer = document.getElementById('mainContainer');

        for (const user of users) {

            const userItem = document.createElement('div');
            userItem.classList.add('user-item');

            const userInfo = document.createElement('div');
            const userName = document.createElement('h2');
            userName.classList.add('user-name');
            userName.innerText = user.name;

            const userId = document.createElement('h5');
            userId.innerText = `id: ${user.id}`;

            userInfo.append(userName, userId);

            const button = document.createElement('div');
            button.innerText = 'MORE DETAILS'

            const link = document.createElement('a');
            link.classList.add('btn-details');
            link.target = '_blank';
            link.href = 'src/pages/UserDetails/user-details.html?data=' + JSON.stringify(user);

            link.appendChild(button);
            userItem.append(userInfo, link);
            mainContainer.appendChild(userItem);
        }
    });

