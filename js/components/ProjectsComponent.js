
import {column} from '../base/views/ColumnComponent.js';

import {card} from './CardComponent.js';

import {prepareElement} from '../base/views/PrepareSwitch.js';

import {createView} from '../base/views/BaseViewPromise.js';

import {Loader} from './Utils/LoaderComponent.js';

import {LoadCss} from './Utils/LoadCss.js';

import {LoaderSingleton} from './Utils/LoaderSingleton.js';


export async function projects(fatherComponent){


    prepareElement(fatherComponent);

    

    var element  = await createView("js/components/Projects.html");

    fatherComponent.appendChild(element);

    element=element.querySelector(".columns");


    

    const instanceOne = new LoaderSingleton();
  
    const loader =  await  instanceOne.getLoader();

    const loader2 =  await  instanceOne.getLoader();
    const loader3 =  await  instanceOne.getLoader();
    
    const col3 = await column();
    const col2 = await column();
    const col1 = await column();

    col3.appendChild(loader);
    col2.appendChild(loader2);
    col1.appendChild(loader3);

    element.appendChild(col3);
    element.appendChild(col2);
    element.appendChild(col1);

    card(col1,"springFx.png","springFx.png", "Spring javafx", "Awesome Text");
    card(col2,"springFx.png","springFx.png", "Spring javafx", "Awesome Text2");
    card(col3,"springFx.png","springFx.png", "Spring javafx", "Awesome Text3");


}