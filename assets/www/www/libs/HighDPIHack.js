{
	var ScreenHeight = window.screen.height;
	var ScreenWidth = window.screen.width;
	var userAgent = navigator.userAgent.toLowerCase();
	if (!userAgent.match(/windows/i) && ScreenHeight >= 1024 && ScreenWidth >= 600) {
		var meta = document.getElementsByTagName("meta");
		meta[0].name = "viewport";
		meta[0].content = "target-densitydpi=320";
		var style = document.createElement("style");
		style.type = "text/css";
		style.innerHTML = "html { font-size : 200% }";
		document.getElementsByTagName("HEAD").item(0).appendChild(style);
	};
	if (!userAgent.match(/windows/i) && ScreenHeight >= 800 && ScreenHeight < 1024 && ScreenWidth >= 480 && ScreenWidth < 600) {
		var meta = document.getElementsByTagName("meta");
		meta[0].name = "viewport";
		meta[0].content = "target-densitydpi=240";
		var style = document.createElement("style");
		style.type = "text/css";
		style.innerHTML = "html { font-size : 150% }";
		document.getElementsByTagName("HEAD").item(0).appendChild(style);
	};
}
