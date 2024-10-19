document.addEventListener("DOMContentLoaded", function() {
const cursor = document.createElement("div");
cursor.className = "cursor";
document.body.appendChild(cursor);

 
 document.addEventListener("mousemove", function(e) {
   // Calculate cursor position
   const cursorX = e.clientX - cursor.offsetWidth / 2; 
   const cursorY = e.clientY - cursor.offsetHeight / 2;
   
   // Update cursor position
   cursor.style.left = cursorX + "px";
   cursor.style.top = cursorY + "px";
   
   // Calculate hue based on cursor position
   const hue = Math.round((e.clientX / window.innerWidth) * 360);
   
   // Update cursor color
   cursor.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)";
});
});
