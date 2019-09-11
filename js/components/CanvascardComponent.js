

import {createView} from '../base/views/BaseViewPromise.js';


export async function canvasCard( ){



    let canvas = await  createView("js/base/views/Column.html");


    return canvas;

}
