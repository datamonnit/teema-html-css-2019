function hideMenu() {
    var x = document.getElementById("menu");
    if (x.className === "top-menu") {
      x.className += " responsive-menu";
    } else {
      x.className = "top-menu";
    }
  }