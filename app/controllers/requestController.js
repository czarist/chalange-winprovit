module.exports = async () => {

    const fetch = require("node-fetch");

    async function makeFetch(url, data = {}) {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });

        return response.json();
    }

    this.users = await makeFetch('https://jsonplaceholder.typicode.com/users');
    this.posts = await makeFetch('https://jsonplaceholder.typicode.com/posts');

    let unitedObject = [];
    let posts = this.posts;

    function pushPost(id) {

        let postContent = [];

        posts.forEach(function (post) {
            if (id == post.userId) {
                postContent.push({
                    id: post.id,
                    title: post.title,
                    body: post.body,
                })
            }
        })

        return postContent;
    }

    this.users.forEach(function (user) {
        let posts = pushPost(user.id);

        unitedObject.push({
            id: user.id,
            name: user.name,
            email: user.email,
            address: `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
            phone: user.phone,
            website: user.website,
            company: user.company.name,
            posts: posts

        })
    })

    this.unitedObject = unitedObject;

    return this;
} 