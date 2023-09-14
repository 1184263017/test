export default function createMenusMain(data, parentElement,transition='all 1s') {
    function createMenus(data) {
        const ul = document.createElement('ul');
        ul.classList.add('menus');
        const HtmlStr = Object.keys(data).reduce((htmlstr, key) => {
            htmlstr += `
        <li class="FirstLi">
            <span data-action="controlSecondUL">${key}</span>
            <ul class="SecondUl">`;
            data[key].forEach(item => {
                htmlstr += `<li class="SecondLi"><span>${item}</span></li>`
            })
            htmlstr += `</ul>
        </li>`;
            return htmlstr;
        }, '');
        ul.innerHTML = HtmlStr;
        return ul;
    }
    parentElement.append(createMenus(data));
    document.querySelectorAll('.SecondUl').forEach(Element => {
        Element.style.transition = transition;
        Element.style.overflow = 'hidden';
        Element.dataset.scrollHeight = Element.scrollHeight;
        Element.style.height = 0;
    });
    parentElement.addEventListener('click', function (event) {
        switch (event.target?.dataset?.action) {
            case undefined: break;
            case null: break;
            case 'controlSecondUL': {
                const Element = event.target.parentElement.querySelector('ul');
                // if()
                if(parseInt(Element.style.height)>0){
                    Element.style.height = 0;
                }else{
                    Element.style.height = Element.dataset.scrollHeight + 'px';
                }
                // event.target.parentElement.querySelector('ul').classList.toggle('hiddenSecond');
            }
            default: break;
        };
    });

};