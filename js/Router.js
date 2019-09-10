import {banner} from './components/BannerComponent.js'
import {card} from './components/CardComponent.js'
import {projects} from './components/ProjectsComponent.js'
import {labs} from './components/LabsComponent.js'


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
                    projects(component);
            break;

            case "Home":
                    console.log(routeIndex);
                    banner(component);
                    console.log("Redirect to "+path[1]);
                    
            break;
                
            case "Labs":
                    console.log(routeIndex);
                    labs(component);
                    console.log("Redirect to "+path[1]);
                    
            break;
        }  
    }

}

