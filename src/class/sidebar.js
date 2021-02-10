import { block } from '../utils';
import { TextBlock, TitleBlock } from './blocks';
export class Sidebar {
    constructor(selector, updateCallback) {
        this.selector = document.querySelector(selector);
        this.update = updateCallback;
        this.init();
    }
    
    init() {
        this.selector.insertAdjacentHTML('afterbegin', this.temlate);
        this.selector.addEventListener('submit', this.addBlock.bind(this));
    }

    addBlock(e) {
        e.preventDefault();
        const type = e.target.name;
        const value = e.target.value.value;
        const styles = e.target.styles.value;

        let newBlock = type === 'text' ? new TextBlock(value, {styles}) : new TitleBlock(value, {styles});
        this.update(newBlock);
        e.target.value.value = '';
        e.target.styles.value = '';
    }

    get temlate() {
        return [block('text'), block('title')].join('');
    }
}
