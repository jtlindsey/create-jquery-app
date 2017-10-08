import './style.css'; //global style
import isLoggedIn from './isLoggedIn.html';

import suiteContent from './content.js'
window.suiteContent = suiteContent;


// append to main-left class
import nav_left from './nav_left.html';
import footer from './footer.html';

// append to main class
import nav_top from './nav_top.html';
import content from './content.html';
import footer2 from './footer.html';

export default () => {
  $("body").html(isLoggedIn);
  $(".main-left").append(nav_left);
  $(".main-left").append(footer);

  $(".main").append(nav_top);
  $(".main").append(content);
  $(".main").append(footer2);
  return true;
};