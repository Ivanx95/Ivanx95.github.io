

import {makeid} from '../../utils/MakeHash.js'
export function prepareElement( fatherComponent){

    
        while (fatherComponent.hasChildNodes()){
            fatherComponent.removeChild(fatherComponent.lastChild);
        }
    }


    export function nest( fatherComponent, id ){

        var node = fatherComponent.getElementById(id);
        var hash = makeid(5);
        node.id = id+hash;
        hash = id+hash;
        return hash;

    }
