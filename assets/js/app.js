/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

particlesJS.load('particles-js', 'assets/js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

$(function(){
  $('.hamburger').on('click', function() {
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  // #maskのエリアをクリックした時にメニューを閉じる
  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });

  // リンクをクリックした時にメニューを閉じる
  $('#navi a').on('click', function() {
    $('#header').removeClass('open');
  });
});
 
