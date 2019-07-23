import {banner} from './components/BannerComponent.js'
import {card} from './components/CardComponent.js'

export function route(){


    // redirect main pain

    
    let component = document.getElementById('mainComponent');

    let routeIndex= window.location.hash;


    var path = routeIndex.split("#");
    if(path.length<2){
        console.log(routeIndex);
        banner(component);
        return;
    }

    if(path.length>1){
        switch(path[1]){
            case "Projects":

                    console.log("Redirect to "+path[1]);
                    card(component,"springFx.png","springFx.png", "Spring javafx");
            break;

            case "Home":
                    console.log(routeIndex);
                    banner(component);
                    console.log("Redirect to "+path[1]);
                    
            break;
        }  
    }

}

