// Handles the language list descriptions with Jquery

'use strict';

// On mouseover, shows a decription of the experience with each
// and stops showing it when the mouse is moved off
$( "div.some-experience" ).hover(
  function() {
    $( this ).prepend( $( "<span> Some experience with </span>" ) );
  }, function() {
    $( this ).find( "span:first" ).remove();
  }
);

$( "div.not-experienced" ).hover(
  function() {
    $( this ).prepend( $( "<span> Minimal experience with </span>" ) );
  }, function() {
    $( this ).find( "span:first" ).remove();
  }
);

$( "div.most-experience" ).hover(
  function() {
    $( this ).prepend( $( "<span> The most experience with </span>" ) );
  }, function() {
    $( this ).find( "span:first" ).remove();
  }
);