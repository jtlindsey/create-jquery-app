export default {
  xclick: function(x) {return false},// Prevent link click from doing anything
  browserHistoryMgmt: function(clickedURL) {
    history.pushState({message:'NewState'}, '', `/${clickedURL}`);
  }
};