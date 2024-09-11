let line = "images/line.png"; // src image for minimize button
let down_arrow = "images/down-arrow1.png"; // src image for expand button

// this function is called when a visible table row is clicked.
// It updates the button that is nested within and displays/hides
// the next neighboring element that is a project description.
function collapsible(el) {
  let element = document.getElementById(el);
  let content_row = element.nextElementSibling;
  let content = content_row.querySelector("td");
  let img = element.querySelector("img");
  
  if (content.style.display == "table-cell") {
    content.style.display = "none";
    img.setAttribute("src", down_arrow);
  } else {
    content.style.display = "table-cell";
    img.setAttribute("src", line);
  }
}
