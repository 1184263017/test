let str = '100';
console.log(str.split(' '));

let num: number = 10;
num = 10;

let a: string = '45';
a = 'sad'

function say(): void {
  console.log(123);
}

let arr1: number[] = [1, 2, 3, 4];
let arr2: Array<string> = ['a', 'c'];
let arr3: [number, string, string?] = [1, 'a', 's']
let arr4: object[] = [{}, {}]
let arr5: Array<object> = [{}, {}]


function f1(a: string = 'a', b?: number): number {
  console.log(a, b);
  return 1;
}

f1('1');


interface objNew {
  name: string,
  age: number
}
