const baseUrl = 'http://127.0.0.1:3000/users';

export function getUserList() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', baseUrl);
        xhr.responseType = 'json';
        xhr.timeout = '5000';
        xhr.onload = () => {
            resolve(xhr.response)
        }
        xhr.send();
    })
}