let bastUrl = 'http://127.0.0.1:3100';

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
            bastUrl = prompt("出错了,可能是端口错误,请重新设置baseURL,格式：'http://127.0.0.1:3000'");
            getTodoListsApi(params).then((data) => {
                resolve(data);
            });
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