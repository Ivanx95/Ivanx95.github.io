import {banner} from './components/BannerComponent.js'

export function route(){


    // redirect main pain

    
    let component = document.getElementById('mainComponent');

    let routeIndex= window.location.href;


    var path = routeIndex.split("#");
    if(!path){
        console.log(routeIndex);
        banner(component);
    }


    switch(path){
        case "Projects":

                console.log("Redirect to projects");
                
        break;
    }  

}

