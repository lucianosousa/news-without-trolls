'use strict';

//document.addEventListener('DOMContentLoaded', hiddenComment, false);
window.addEventListener('load', hiddenComment, false )

function hiddenComment() {
  console.log("🔥 comments");
  document.getElementById("boxComentarios").style.display = "none";
}
