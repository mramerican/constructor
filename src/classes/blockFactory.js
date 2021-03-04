import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from "./block";

export const blockFactory = (type ,value, options) => {
    let block;
    switch (type) {
        case 'text': block = new TextBlock(value, options); break;
        case 'title': block = new TitleBlock(value, options); break;
        case 'image': block = new ImageBlock(value, options); break;
        case 'columns': block = new ColumnsBlock(value, options); break;
    }

    return block;
}
