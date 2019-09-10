
import { render} from '../base/baseComponent.js';

import {LoaderSingleton} from './Utils/LoaderSingleton.js';

export function banner( fatherComponent){


    render("js/components/Banner.html", fatherComponent);

}
