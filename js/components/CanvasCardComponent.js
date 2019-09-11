

import {createView} from '../base/views/BaseViewPromise.js';


export async function canvasCard(title){



    let canvas = await  createView("js/components/CanvasCard.html");
    let titleEl = canvas.querySelector(".intro-title");
    titleEl.innerHTML=title;

    return canvas;

}
