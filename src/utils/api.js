import { config } from './config';

const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка : ${res.status}`);
};

class Api {
    constructor({ url, token }) {
        this._url = url;
        this._token = token;
    }

    getPosts(itemID) {
        const requestUrl = itemID ? `${this._url}/posts/${itemID}` : `${this._url}/posts`; 
        return fetch(requestUrl, {
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(onResponce);
    }


    getCurentUser() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(onResponce);
    }
    
    addLike(itemID) {
        return fetch(`${this._url}/posts/likes/${itemID}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(onResponce);
    }

    deleteLike(itemID) {
        return fetch(`${this._url}/posts/likes/${itemID}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(onResponce);
    }
   
    deletePosts(itemID) {
        return fetch(`${this._url}/posts/${itemID}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${this._token}`,
          },
        }).then(onResponce);
      }

    createPost(post) {
        return fetch(`${this._url}/posts`, {
            method: "POST",
            headers: {
              authorization: `Bearer ${this._token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
          }).then(onResponce) 
    } 
    getSearch(query){
        return fetch(`${this._url}/posts/search/?query=${query}`, {
          headers: {
            authorization: `Bearer ${this._token}`,
          },
        }).then(onResponce);
    }     
  

}

export default new Api(config);