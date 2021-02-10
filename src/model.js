import img from './assets/koenigsegg-gemera.jpg';
import { TextBlock, ColumnsBlock, TitleBlock, ImageBlcok } from './class/blocks';

export const model = [
    new TitleBlock('Конструктор сайтов на vanillaJS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlcok (img, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'image'
    }),
    new ColumnsBlock(['11111111111', '22222222', 'hfpwehufpfuwipehf'], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new TextBlock('some text', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
];