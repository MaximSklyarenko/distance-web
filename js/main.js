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


function addInfo() {
  var panels = document.getElementsByClassName("panel");
  var i;
  for (i = 0; i < panels.length; i++) {
	var curPanel = panels[i];
    
	if (curPanel.getAttribute("id") != "afisha") {
      var elemDiv = document.createElement("div");
      elemDiv.setAttribute("class", "info-img-div");
      elemDiv.setAttribute("onMouseOver", "showInfo()");
	  elemDiv.setAttribute("onMouseOut","revertPanel()");


      var elemImg = document.createElement("img");
      elemImg.setAttribute("src", "pics/info.svg");
      elemImg.setAttribute("class", "info-img");

      elemDiv.appendChild(elemImg);

      curPanel.appendChild(elemDiv);
	
	}

  }
};

function showInfo() {
  var parImageDiv = event.target.parentElement;
  var parDiv = parImageDiv.parentElement; /*Плашка*/
  var infoPanel = parDiv.querySelector('.panel-info-show');
  infoPanel.setAttribute("style","display:flex;background:#5A2497!important;");  
  
  
  var children = parDiv.childNodes;               
  for(var c=0; c < children.length; c++) {
    if(children[c].style && 
	   children[c].getAttribute("class") != "panel-info-show" && 
	   children[c].getAttribute("class") != "info-img-div") {
       children[c].style.display = 'none';
    }
  }
  
  event.stopPropagation();
  //event.target.setAttribute("onMouseOver", "revertPanel()");
}

function revertPanel() {
  console.log("out of focus");	
  var parImageDiv = event.target.parentElement;
  var parDiv = parImageDiv.parentElement; /*Плашка*/
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
  
  event.stopPropagation();
  //event.target.setAttribute("onMouseOver", "showInfo()");	
}	

function orientationChangeFunction() {
  var slidesQ = window.getComputedStyle(document.documentElement).getPropertyValue("--slides-q");
  var classSliderPreview;
      
  classSliderPreview="uk-slider-items uk-child-width-1-" + slidesQ.trim() + " uk-child-width-1-" + slidesQ.trim() +
  "@s uk-child-width-1-" + slidesQ.trim() +"@m uk-grid";
  
  var elem = document.getElementById("slider-preview");
  
  elem.setAttribute("class", classSliderPreview);

};

function render() {
    
  orientationChangeFunction();
  addInfo();


  // Listen for orientation changes
  window.addEventListener("orientationchange", orientationChangeFunction, false);

  // Listen for resize changes
  window.addEventListener("resize", orientationChangeFunction, false);


};
