
import {Loader} from './LoaderComponent.js';

export class LoaderSingleton {
    constructor() {
        if (!!LoaderSingleton.instance) {
            return LoaderSingleton.instance;
        }

        LoaderSingleton.instance = this;

        this.element = undefined;

        this.parser = new DOMParser();

        return this;
    }

    Load(){
       return  Loader();
    }

    async getLoader() {

        if(this.element==undefined){
            this.element = await this.Load();
        }
      
        // Parse the text
        var doc = this.parser.parseFromString(this.element, "text/html");
    
        let targetElement =doc.querySelector("body").childNodes[0];

        return targetElement;

    }
}