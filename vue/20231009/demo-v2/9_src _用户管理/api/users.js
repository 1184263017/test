const baseUrl = 'http://127.0.0.1:3000/users'

// 处理搜索拼接
function processSearch(params) {
    const arr = Object.entries(params);
    const res = arr.reduce((str, v) => {
        return str += `${v[0]}=${v[1]}&`;
    }, '').slice(0, -1)
    return res;
}

// 获取用户列表
function getUsersApi(params = {}) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", baseUrl + `?${processSearch(params)}`);
        xhr.responseType = "json";
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.send();
    });
}

// 获取用户总数
function getUsersPageApi(params = {}) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", baseUrl + `?${processSearch(params)}`);
        xhr.responseType = "json";
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.send();
    });
}

// 删除用户总数
function delUsersApi(id) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("DELETE", baseUrl + `/${id}`);
        xhr.responseType = "json";
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.send();
    });
}

// 修改用户总数
function saveUsersApi(id, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("PATCH", baseUrl + `/${id}`);
        xhr.responseType = "json";
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.send(data);
    });
}

// 添加用户总数
function addUserApi(data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', baseUrl);
        xhr.responseType = 'json';
        xhr.onload = () => {
            resolve()
        }
        xhr.onerror = () => {
            reject()
        }

        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(data);
    })
}

export {
    getUsersApi,
    delUsersApi,
    addUserApi,
    saveUsersApi,
    getUsersPageApi
}