// export let age = 200;
// export let username = 'jack';
// export let info = {
//     username,
//     age
// }

// export class Person{
//     name = "lili"
// }

// export function say() {
//     console.log(info.username);
// }


let age = 200;
let username = 'jack';
let info = {
    username,
    age
}

class Person{
    username = "lili"
}

function say() {
    console.log(info.username);
}

// 导出与声明分开写法
export {say,Person,age as nianling,username,info};