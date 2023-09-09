export default function on(event,methods,act='action') {
    document.addEventListener(event,function (e) {
        let action = e.target.dataset[act];
        if (action === undefined || methods[action] === undefined) return;
        methods[action].call(e.target,e);
    })
}