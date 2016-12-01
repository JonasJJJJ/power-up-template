/* global TrelloPowerUp */

var WHITE_ICON = './images/icon-white.svg';
var GRAY_ICON = './images/icon-gray.svg';

var VIDEO_ICON = 'https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_ondemand_video_black_24px.svg';

TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
    icon: './images/icon-white.svg',
    text: 'My Button',
    callback: function(t){
      // do something when the button is clicked
    }}];
  },
  'show-settings': function(t, options){
    return t.popup({
      title: 'Settings',
      url: './settings.html',
      height: 184
    });
  }
});
