import './style.css';
// import gto from './index.html';
import Icon from './demo.png';

export default () => {
// import Icon from './demo.png';
  let s = `<div id="t1">
    <div id="clickme">
      Click here again 2p
    </div>
    <img id="book" src"Icon" alt="somthing" width="102" height="123">
  </div>`;

  $("body").html(s);
  $('#book').attr('src', Icon);

  $( "#clickme" ).on('click', function() {
    console.log('clicked?');
    $( "#book" ).toggle( "slow", function() {
    });
  });
};