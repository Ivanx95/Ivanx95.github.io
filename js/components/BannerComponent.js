
import { render} from '../base/baseComponent.js';

import {LoaderSingleton} from './Utils/LoaderSingleton.js';

export function banner( fatherComponent){


	
	const instanceOne = new LoaderSingleton();
	 instanceOne.getLoader();

    render("js/components/Banner.html", fatherComponent);

}