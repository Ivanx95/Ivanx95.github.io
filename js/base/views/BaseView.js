


import {localPath} from '../LocalPath.js';

var element;

 function createView(view,callback){

    const fetchPromise = fetch(localPath+view);
    fetchPromise.then(response => {
      return response.text();
    }).then(value => {

        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(value, "text/html");
        return doc;
    }).then(doc=>{

        callback(doc.querySelector("body").childNodes[0]);
    })

    return fetchPromise;

}

export {createView};