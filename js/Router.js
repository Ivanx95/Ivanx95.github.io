import {banner} from './components/BannerComponent.js'

export function route(){


    // redirect main pain

    
    let component = document.getElementById('mainComponent');

    let routeIndex= window.location.href;


    var path = routeIndex.split("#");
    if(path.length<2){
        console.log(routeIndex);
        banner(component);
        return;
    }

    if(path.length>2){
        switch(path[1]){
            case "Projects":

                    console.log("Redirect to projects");
                    
            break;

            case "Home":
                    console.log(routeIndex);
                    banner(component);
                    console.log("Redirect to projects");
                    
            break;
        }  
    }

}

