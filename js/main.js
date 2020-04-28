cssVars({
  
  // Treat all browsers as legacy
  onlyLegacy: true,
  
  // DEMO: Toggles to see results
  // ----------------------------
  // preserveStatic: false,
  // preserveVars: true,
  // updateURLs: false,
  // variables: { '--color': 'purple' },
  // ----------------------------
  
  // Display transformed CSS
  onComplete: function(cssText, styleNodes, cssVariables, benchmark) {
    console.log("onComplete")
	//console.log(cssText);
  }
});

var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

function addInfo() {
  var panels = document.getElementsByClassName("panel");
  var i;
  
  for (i = 0; i < panels.length; i++) {
	var curPanel = panels[i];
    
	// Добавление подсказки о стоимости ресурса
	if (curPanel.getAttribute("id") != "afisha") {
      var elemDiv = document.createElement("div");
      elemDiv.setAttribute("class", "info-img-div");
	  
	  if (supportsTouch) {
		elemDiv.setAttribute("onClick", "showInfo()"); 
	  }	
      else {
		elemDiv.setAttribute("onMouseOver", "showInfo()");
	    elemDiv.setAttribute("onMouseOut","revertPanel()");
	  }

      var elemImg = document.createElement("img");
	  
      if (curPanel.classList.contains("free-cont")) {
        elemImg.setAttribute("src", "pics/info-f.svg");
	  }		  
      else {	  
	    elemImg.setAttribute("src", "pics/info-p.svg");
	  }
      elemImg.setAttribute("class", "info-img");

      elemDiv.appendChild(elemImg);

      curPanel.appendChild(elemDiv);
	
	}
	
	// Добавление иконки для просмотра видеоролика
	if (curPanel.getAttribute("id") == "stratum") {
      var elemDiv = document.createElement("div");
      elemDiv.setAttribute("class", "video-img-div");
	  
	  var videoDiv = document.createElement("div");
	  videoDiv.setAttribute("uk-lightbox", "");
	  
	  var elemA = document.createElement("a");
	  elemA.setAttribute("href", "https://www.youtube.com/watch?v=uDZkbw2ch4Q");
	  
	  var elemImg = document.createElement("img");
	  elemImg.setAttribute("src", "pics/video.svg");
	  elemImg.setAttribute("class", "video-img");
      elemA.appendChild(elemImg);
	  
	  videoDiv.appendChild(elemA);
	  
	  elemDiv.appendChild(videoDiv);

      curPanel.appendChild(elemDiv);
	
	}

  }
};

function showInfo() {
  event.stopPropagation();	
  //alert("showInfo");
  var parImageDiv = event.target.parentElement;
  var parDiv = parImageDiv.parentElement; /*Плашка*/
  
  var infoPanel = parDiv.querySelector('.panel-info-show');
  
  var children = parDiv.childNodes;               
  for(var c=0; c < children.length; c++) {
    if(children[c].style && 
	   children[c].getAttribute("class") != "panel-info-show" && 
	   children[c].getAttribute("class") != "info-img-div") {
       children[c].style.display = 'none';
    }
  }    
  
  infoPanel.style.display="flex";   
  

  //alert("showInfo"); 
 
  if (supportsTouch) {
	//alert("changeEvent");  
    event.target.setAttribute("onClick", "revertPanel()"); 
  }
}

function revertPanel() {
	
  event.stopPropagation();
  //alert("revertPanel");
  var parImageDiv = event.target.parentElement;
  var parDiv = parImageDiv.parentElement; //Плашка
  var infoPanel = parDiv.querySelector('.panel-info-show');
  infoPanel.setAttribute("style","display:none;background:#5A2497!important;");  
  
  
  var children = parDiv.childNodes;               
  for(var c=0; c < children.length; c++) {
    if(children[c].style && 
	   children[c].getAttribute("class") != "panel-info-show" && 
	   children[c].getAttribute("class") != "info-img-div") {
       children[c].style.display = '';
    }
  } 
    
  //alert("revertPanel"); 	
	
  if (supportsTouch) {
	//alert("changeEvent");   
    event.target.setAttribute("onClick", "showInfo()"); 
  }
  
}	

function orientationChangeFunction() {
  var slidesQ = window.getComputedStyle(document.documentElement).getPropertyValue("--slides-q");
  var newsQ = window.getComputedStyle(document.documentElement).getPropertyValue("--news-q");
  var classSliderPreview;
  var classNewsPreview;

  classSliderPreview="uk-slider-items uk-child-width-1-" + slidesQ.trim() + " uk-child-width-1-" + slidesQ.trim() +
  "@s uk-child-width-1-" + slidesQ.trim() +"@m uk-grid";
  
  classNewsPreview="uk-slider-items uk-child-width-1-" + newsQ.trim() + " uk-child-width-1-" + newsQ.trim() +
  "@s uk-child-width-1-" + newsQ.trim() +"@m uk-grid";
  
  var elem = document.getElementById("slider-preview");
  var news = document.getElementById("news-preview");
  
  elem.setAttribute("class", classSliderPreview);
  news.setAttribute("class", classNewsPreview);
  
  //alert(slidesQ); 
  
  var refDivs = document.getElementsByClassName("ref-div");
  var i;
  
  for (i = 0; i < refDivs.length; i++) {
	  
	refDivs[i].style.height = getComputedStyle(document.getElementById("nav-elem")).height;
	//alert(refDivs[i].style.height);
  };
   
};

function render() {
    
  orientationChangeFunction();
  addInfo();


  // Listen for orientation changes
  window.addEventListener("orientationchange", orientationChangeFunction, false);

  // Listen for resize changes
  window.addEventListener("resize", orientationChangeFunction, false);


};
