import { row, col, css } from '../utils';

class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }
    HTML() {
        throw new Error('Метод HTML не реализован');
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    HTML() {
        const { tag = 'h1', styles } = this.options;
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
    }
}
export class ImageBlcok extends Block {
    constructor(value, options) {
        super(value, options);
    }
    HTML() {
        const { imageStyles: is, alt = '', styles } = this.options;
        return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}"/>`, styles);
    }
}
export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    HTML() {
        const html = this.value.map(col).join('');
        return row(html, css(this.options.styles));
    }
}
export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    HTML() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles));
    }
}