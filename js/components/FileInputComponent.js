

import { render} from '../base/baseComponent.js';

import {createView} from '../base/views/BaseViewPromise.js';
import {localPath} from '../base/LocalPath.js';

export class FileInput{


	 constructor(){
	 	this.fileInputPromise  = createView("js/components/InputFileComponent.html");

	 	
	 }

	 getFileInput(){
	 	return this.fileInputPromise;
	 }

}

