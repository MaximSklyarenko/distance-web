function addInfo() {
  var panels = document.getElementsByClassName("panel");
  var i;
  for (i = 0; i < panels.length; i++) {

    var curPanel = panels[i];

    var elemDiv = document.createElement("div");
    elemDiv.setAttribute("class", "info-img-div");
    elemDiv.setAttribute("onClick", "showInfo()");


    var elemImg = document.createElement("img");
    elemImg.setAttribute("src", "pics/info.svg");
    elemImg.setAttribute("class", "info-img");

    elemDiv.appendChild(elemImg);

    curPanel.appendChild(elemDiv);

  }
};

function showInfo() {
  /*var parImageDiv = event.target.parentElement;
  var parDiv = parImageDiv.parentElement;
	
  var divClass = parDiv.getAttribute("class");
  divClass = divClass + " panel-info-show";
  parDiv.setAttribute("class",divClass);
  */
}

function orientationChangeFunction() {
  var slidesQ = window.getComputedStyle(document.documentElement).getPropertyValue("--slides-q");
  var classSliderPreview;

  switch (slidesQ) {
    case '2':
      classSliderPreview = "uk-slider-items uk-child-width-1-2 uk-child-width-1-2@s uk-child-width-1-2@m uk-grid";
      break;
    case '3':
      classSliderPreview = "uk-slider-items uk-child-width-1-3 uk-child-width-1-3@s uk-child-width-1-3@m uk-grid";
      break;
    case '4':
      classSliderPreview = "uk-slider-items uk-child-width-1-4 uk-child-width-1-4@s uk-child-width-1-4@m uk-grid";
      break;
    case '6':
      classSliderPreview = "uk-slider-items uk-child-width-1-6 uk-child-width-1-6@s uk-child-width-1-6@m uk-grid";
      break;
    default:
      classSliderPreview = "uk-slider-items uk-child-width-1-6 uk-child-width-1-6@s uk-child-width-1-6@m uk-grid";
      break;
  };

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
