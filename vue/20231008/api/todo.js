const bastUrl = 'http://127.0.0.1:3000';

function processSearch(params) {
    const arr = Object.entries(params);
    const res = arr.reduce((str, v) => {
        return str += `${v[0]}=${v[1]}&`;
    }, '').slice(0, -1)
    return res;
}
// 列表接口
function getTodoListsApi(params = {}) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${bastUrl}/todo?${processSearch(params)}`);
        xhr.responseType = 'json';
        xhr.onload = () => {
            resolve(xhr.response)
        }
        xhr.onerror = () => {
            reject()
        }
        xhr.send();
    })

}
// 添加接口
function addTodoApi(data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${bastUrl}/todo`);
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
// 删除数据
function delTodoApi(id) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', `${bastUrl}/todo/${id}`);
        xhr.responseType = 'json';
        xhr.onload = () => {
            resolve(xhr.response)
        }
        xhr.onerror = () => {
            reject()
        }
        xhr.send();
    })
}
// 修改数据
function saveTodoApi(id, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PATCH', `${bastUrl}/todo/${id}`);
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
    saveTodoApi,
    delTodoApi,
    addTodoApi,
    getTodoListsApi
}