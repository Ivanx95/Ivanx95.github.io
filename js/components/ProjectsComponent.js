
import {column} from '../base/views/ColumnComponent.js';

import {card} from './CardComponent.js';

import {prepareElement} from '../base/views/PrepareSwitch.js';

import {createView} from '../base/views/BaseViewPromise.js';

export async function projects(fatherComponent){


    prepareElement(fatherComponent);

    var element  = await createView("js/components/Projects.html");

    fatherComponent.appendChild(element);

    element=element.querySelector(".columns");

    const col1 = await column();

    element.appendChild(col1);

    card(col1,"springFx.png","springFx.png", "Spring javafx");

    const col2 = await column();

    element.appendChild(col2);

    card(col2,"springFx.png","springFx.png", "Spring javafx");


}