

var localPath ="Ivanx95.github.io/"
function render (file, fatherComponent){

    


    var xhr= new XMLHttpRequest();
    xhr.open('GET', localPath+"Banner.html", true);

    
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return; // or whatever error handling you want
        if(this.responseText){
            file.innerHTML= this.responseText;
        }
        
    };
    xhr.send();


}
export {render};