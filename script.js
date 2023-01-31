document.onscroll = function () {
  let myPosY = window.pageYOffset;
  let totalHeight = document.body.clientHeight;
  let navDivWidth = document.getElementById("navdiv").offsetWidth;
  //  console.log("navDivWidth: " + navDivWidth);
  let progressPercentage = (myPosY * navDivWidth) / totalHeight + 20;
  document.getElementById("arrow").style.left = progressPercentage + "px";
};
