const responseHandler = res => {
    return res.ok ? res.json() : res.statusText;
}

class Api {
    constructor({path, token}) {
        this.path = path;
        this.token = token;
    }
    getProductList() {
        return fetch(`${this.path}/products`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    getSingleProduct(id) {
        return fetch(`${this.path}/products/${id}`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    signup(body) {
        return fetch(`${this.path}/signup`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(responseHandler);
    }
    login(body) {
        return fetch(`${this.path}/signin`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(responseHandler);
    }
}

const config = {
    path: "https://api.react-learning.ru",
//     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmYxNzBhOTZhYTE5MTA0MzI4Mjg2NTQiLCJpYXQiOjE2NTk5OTAyMjUsImV4cCI6MTY5MTUyNjIyNX0.1WZll_Zk0wDMzt0r5qlusI45jGp5JAt2DzEQhIfk7Jk"
}

const api = new Api(config);

export default api;