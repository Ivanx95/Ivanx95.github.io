


import {localPath} from '../LocalPath.js';

var element;

 async function createView(view,callback){

    const fetchPromise = await fetch(localPath+view)
    .then(response => {
      return response.text();
    });

    return fetchPromise;

}

export {createView};