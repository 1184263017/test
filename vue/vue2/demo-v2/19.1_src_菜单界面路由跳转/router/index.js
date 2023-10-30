import VueRouter from "vue-router";
import Vue from "vue";
import LayoutIndex from '../views/layout/LayoutIndex'
import BodyIndex from '../views/body/BodyIndex'
Vue.use(VueRouter);

let arrayT = [];
for (let i = 1; i < 9; i++) {
    let obj = {
        path: `/title${i}`,
        name: `Title${i}`,
        redirect: {
            name: `Title${i}_1`
        },
        meta: {
            name: `菜单${i}`
        },
        component: LayoutIndex,
        children: []
    }
    for (let x = 1; x < 4; x++) {
        let objT = {
            path: `${x}`,
            name: `Title${i}_${x}`,
            meta: {
                name: `菜单${i}-${x}`
            },
            component: BodyIndex,
        }
        obj.children.push(objT)
    }
    arrayT.push(obj)
}
console.log(arrayT);
arrayT.unshift({
    path: '/',
    name: 'Home',
    redirect: {
        name: 'Title1'
    },
});

const router = new VueRouter({
    routes: arrayT
})

export default router;