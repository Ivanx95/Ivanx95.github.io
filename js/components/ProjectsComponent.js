
import {column} from '../base/views/ColumnComponent.js';

import {buttonCMixUp} from '../base/views/CMixUpButtonComponent.js';

import {card} from './CardComponent.js';

import {prepareElement} from '../base/views/PrepareSwitch.js';

import {createView} from '../base/views/BaseViewPromise.js';

import {Loader} from './Utils/LoaderComponent.js';


import {loadScript} from './Utils/LoadScript.js';


import {LoaderSingleton} from './Utils/LoaderSingleton.js';


let pointCardDesc = 
`<p><a href="http://mycard.host/">MyCard:</a> A complete vanilla js 
card points PaaS, is a project torwards to be a fully 
running business, aimed to be developed almost from scratch,
made with the less possible frameworks, less cloud possible providers
</p>`;



export async function projects(fatherComponent){


    prepareElement(fatherComponent);

    var element  = await createView("js/components/Projects.html");
    
    element=element.querySelector(".container");

    let row1=document.createElement("div");
    row1.classList.add("columns");
    

    let row2=document.createElement("div");
     let row3=document.createElement("div");
    row2.classList.add("columns");
    
    const col5 = await column();
    const col4 = col5.cloneNode(true);
    const col3 = col5.cloneNode(true);

    const col2 =col5.cloneNode(true);
    const col1 =col5.cloneNode(true);

    row1.appendChild(col4);
    row1.appendChild(col3);

    row2.appendChild(col2);
    row2.appendChild(col1);
    row3.appendChild(col5);
    
    element.appendChild(row1);
    element.appendChild(row2);
    element.appendChild(row3);
   
    let cMixBtn = await buttonCMixUp();
    let javaFxBtnDesc = 
`<a class="github-button" href="https://github.com/Ivanx95/SimplePTVSpring" data-icon="octicon-star" aria-label="Star Ivanx95/SpringJavaFx Pos on GitHub">Star</a>`;

    let electronPTVBtnDesc = `<a class="github-button" href="https://github.com/Ivanx95/SimpleTpv" data-icon="octicon-star" aria-label="Star Ivanx95/Electron Pos on GitHub">Star</a> `;
    let mixBtnDesc =`<a class="github-button" href="https://github.com/Ivanx95/Java-C-MixUp" data-icon="octicon-star" aria-label="Star Ivanx95/Java-C-MixUp on GitHub">Star</a>`;
    let javaFxButton = createBtn(javaFxBtnDesc);

     card(col5,"","", "Lzc logistics", `(WIP) A landing page for Logistics company in Mexico, <a href="https://camiones.pages.dev/">web page</a>`);
    card(col4,"card_client.png","card_client.png","MyCard", pointCardDesc);
    card(col2,"springFx.png","springFx.png", "Spring javafx", "A simple POS made with spring-boot-support and javafx 8", {".intro-content":javaFxButton});
    card(col3,"electron.png","electron.png", "SimplePTV Electron", "A simple POS made with ElectronJS  Bulma CSS and Sequelize ", {".intro-content":createBtn(electronPTVBtnDesc)});
    let mixBtnNode = {".intro-content":cMixBtn};
    card(col1,"java_c.png","java_c.png", "Java c++ legacy mix", "JVM controlled by a C program",{".intro-content":createBtn(mixBtnDesc)});     

    fatherComponent.appendChild(element);
        
    loadScript("https://buttons.github.io/buttons.js", function(){

    });


    function createBtn(text){
        let element = document.createElement("div");
        element.innerHTML = text;
        return element;        
    }
}
