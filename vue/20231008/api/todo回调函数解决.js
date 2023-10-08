const bastUrl = 'http://127.0.0.1:3000';

function processSearch(params) {
    const arr = Object.entries(params);
    const res = arr.reduce((str, v) => {
        return str += `${v[0]}=${v[1]}&`;
    }, '').slice(0, -1)
    return res;
}
// 列表接口
function getTodoListsApi(params = {}, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${bastUrl}/todo?${processSearch(params)}`);
    xhr.responseType = 'json';
    xhr.onload = () => {
        cb(xhr.response);
    }
    xhr.send();
}
// 添加接口
function addTodoApi(data) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${bastUrl}/todo`);
    xhr.responseType = 'json';
    xhr.onload = () => {
        getTodoListsApi();
        // this.title = '';
    }
    // 设置发送数据个格式
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(data);
}
// 删除数据
function delTodoApi(id) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `${bastUrl}/todo/${id}`);
    xhr.responseType = 'json';
    xhr.onload = () => {
        getTodoListsApi();
    }
    xhr.send();
}
// 修改数据
function saveTodoApi(id, data) {
    const xhr = new XMLHttpRequest();
    xhr.open('PATCH', `${bastUrl}/todo/${id}`);
    xhr.responseType = 'json';
    xhr.onload = () => {
        getTodoListsApi();
    }
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(data);
}

export {
    saveTodoApi,
    delTodoApi,
    addTodoApi,
    getTodoListsApi
}