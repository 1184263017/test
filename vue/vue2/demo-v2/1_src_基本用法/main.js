import './a.css';
import './b.scss'
// import './c.less'
console.log(11111);

const obj = {
  [Symbol('id')]:1
}
console.log(Reflect.ownKeys(obj).length);