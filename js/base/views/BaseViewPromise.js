


import {localPath} from '../LocalPath.js';

var element;

 async function createView(view,callback){

    const fetchPromise = await fetch(localPath+view)
    .then(response => {
      return response.text();
    }).then(value => {

        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(value, "text/html");
        return doc;
    }).then(doc=>{

        return doc.querySelector("body").childNodes[0];
    })

    return fetchPromise;

}

export {createView};