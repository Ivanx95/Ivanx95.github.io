
import {column} from '../base/views/ColumnComponent.js';

import {buttonCMixUp} from '../base/views/CMixUpButtonComponent.js';

import {card} from './CardComponent.js';

import {prepareElement} from '../base/views/PrepareSwitch.js';

import {createView} from '../base/views/BaseViewPromise.js';

import {Loader} from './Utils/LoaderComponent.js';


import {loadScript} from './Utils/LoadScript.js';


import {LoaderSingleton} from './Utils/LoaderSingleton.js';


export async function projects(fatherComponent){


    prepareElement(fatherComponent);

    var element  = await createView("js/components/Projects.html");
    
    element=element.querySelector(".intro-columns");
    
    const col4 = await column();
    const col3 = await column();
    const col2 = await column();
    const col1 = await column();


    element.appendChild(col4);
    element.appendChild(col3);
    element.appendChild(col2);
    element.appendChild(col1);

   
    let cMixBtn = await buttonCMixUp();

    card(col1,"card_client.png","card_client.png", '<p>Vanilla js complete card pints paas <a href="http://mycard.host/">mycard </a></p>');
    card(col2,"springFx.png","springFx.png", "Spring javafx", "SimplePTV made with spring-boot-support and javafx 8");
    card(col3,"electron.png","electron.png", "SimplePTV Electron", "SimplePTV made with ElectronJS  Bulma CSS and Sequelize ");
    let mixBtnNode = {".intro-content":cMixBtn};
    card(col4,"java_c.png","java_c.png", "Java c++ legacy mix", "JVM controlled by a C program",mixBtnNode);     

    fatherComponent.appendChild(element);
        
    loadScript("https://buttons.github.io/buttons.js", function(){

    });

}
