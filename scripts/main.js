//get the #project_windows
let disciplines = document.querySelectorAll(".discipline");
let project_windows = document.querySelectorAll('.project-window');
let project_windows_topbar = document.querySelectorAll('.window-topbar');

let moreabt_btn = document.querySelector("#moreabt-btn");
let more_abt_me = document.querySelector("#more-abt-me");
let rest_text = document.querySelector("#rest-text");

let textHidden = false;
function toggleText() {
    textHidden != textHidden;
    console.log(textHidden);

    if(textHidden==false){
        more_abt_me.style.display = "inline";
        rest_text.style.opacity = 0.5;
    } else {
        more_abt_me.style.display = "none";
        rest_text.style.opacity = 1;
    }
};

moreabt_btn.addEventListener("click", ()=>textHidden = !textHidden);

// function showMoreabtText(){
//     if(textHidden==false){
//         more_abt_me.style.display = "inline";
//         rest_text.style.opacity = 0.5;
//     }
// };

let branding_projects = document.querySelectorAll(".branding-project");
let web_projects = document.querySelectorAll(".web-project");
let editorial_projects = document.querySelectorAll(".editorial-project");

function moveElmRand(elm){
    elm.style.display = "flex";
    elm.style.position ='absolute';
    elm.style.top = Math.floor((Math.random()*300))+'px';
    elm.style.left = Math.floor((Math.random()*1200))+'px';
}

// Underline/undo underline after mouseenter/mouseleave each discipline
for(let i=0; i<disciplines.length; i++) disciplines[i].addEventListener('mouseenter', function(e){e.target.style.textDecoration = "underline"});
for(let i=0; i<disciplines.length; i++) disciplines[i].addEventListener('mouseleave', function(e){e.target.style.textDecoration = "none"});

// Show all project windows depending on discipline clicked + hide all other projects
// a) when clicking branding projects
for(let i=0; i<branding_projects.length; i++) disciplines[0].addEventListener('click', function(){
    moveElmRand(branding_projects[i]);
    for(let k=0; k<web_projects.length; k++) web_projects[k].style.display = "none";
    for(let n=0; n<editorial_projects.length; n++) editorial_projects[n].style.display = "none";
});

// b) when clicking web projects
for(let i=0; i<web_projects.length; i++) disciplines[1].addEventListener('click', function(){
    moveElmRand(web_projects[i]);
    for(let k=0; k<branding_projects.length; k++) branding_projects[k].style.display = "none";
    for(let n=0; n<editorial_projects.length; n++) editorial_projects[n].style.display = "none";
});

// c) when clicking editorial projects
for(let i=0; i<editorial_projects.length; i++) disciplines[2].addEventListener('click', function(){
    moveElmRand(editorial_projects[i]);
    for(let k=0; k<web_projects.length; k++) web_projects[k].style.display = "none";
    for(let n=0; n<branding_projects.length; n++) branding_projects[n].style.display = "none";
});

for(let i=0; i<project_windows.length; i++) project_windows_topbar[i].addEventListener("mouseenter", function(e){e.target.classList.add("toGrab")});


for(let i=0; i<project_windows.length; i++) dragElement(project_windows[i]);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    // elmnt.classList.remove("toGrab");
    elmnt.classList.add("grabbing");
    e.target.classList.remove("toGrab");
  }

  function closeDragElement(e) {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    elmnt.classList.remove("grabbing");
    e.target.classList.add("toGrab");
  }
}
