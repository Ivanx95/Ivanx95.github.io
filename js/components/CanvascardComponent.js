

import {createView} from '../base/views/BaseViewPromise.js';


export async function canvasCard( ){



    let canvas = await  createView("js/components/CanvasCard.html");


    return canvas;

}
