$( '#act1' ).focusout(function() {
  if ( $( '#act1' ).val() != '' ) {
    var inLoc = $( '#act1' ).val();
  } else { var inLoc = '[act1]' };
  $( '.a1' ).replaceWith( '<p class="a1">' + inLoc + '</p>' );
});
$( '#act2' ).focusout(function() {
  if ( $( '#act2' ).val() != '' ) {
    var inLoc = $( '#act2' ).val();
  } else { var inLoc = '[act2]' };
  $( '.a2' ).replaceWith( '<p class="a2">' + inLoc + '</p>' );
});
$( '#act3' ).focusout(function() {
  if ( $( '#act3' ).val() != '' ) {
    var inLoc = $( '#act3' ).val();
  } else { var inLoc = '[act3]' };
  $( '.a3' ).replaceWith( '<p class="a3">' + inLoc + '</p>' );
});
