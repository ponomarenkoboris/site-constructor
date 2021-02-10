export class Site {
    constructor(selector) {
        this.selector = document.querySelector(selector);
    }
    render(model) {
        this.selector.innerHTML = '';
        model.forEach(item => {
            this.selector.insertAdjacentHTML('beforeend', item.HTML());
        })
    }

}