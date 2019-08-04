

export function LoadCss(href){
	var link = document.createElement("link");
	link.href = href;
	link.type = "text/css";
	link.rel = "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(link);
}