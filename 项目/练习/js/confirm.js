 /* ----------------提醒弹出框----------------- */
 export default function confirm(obj) {
    return new Promise((resolve, reject) => {
        let str = '';
        str += `
    <div class="modal" tabindex="-1" style="display: block;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${obj.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-modal-close></button>
                </div>
                <div class="modal-body">
                    <p>${obj.center}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-modal-confirm>确定</button>
                    <button type="button" class="btn btn-secondary" data-modal-close>取消</button>
                </div>
            </div>
        </div>
    </div>
    `
        //将html插入到body中
        const div = document.createElement('div');
        div.innerHTML = str;
        div.onclick = function (e) {
            const target = e.target;
            //用户点击的取消
            if (target.dataset.modalClose !== undefined) {
                div.remove();
                reject(new Error(false));
            };
            //用户点击了确定
            if (target.dataset.modalConfirm !== undefined) {
                div.remove();
                resolve(true);
            };
        }
        document.body.append(div);
        // document.body.insertAdjacentHTML('beforeend', str);
    })
}
