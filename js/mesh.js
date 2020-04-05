function OpenMeshMenu() {
  document.getElementById("MeshDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches('.mesh-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
