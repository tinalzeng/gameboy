/*
Sort the date / points colums on click
 */

( function( $ ) {

$( document ).ready(function() {

	var datebtn = $('#order_date'),
	pointsbtn = $('#order_points'),
	li = $('li.sortable'),
	pointInverse = true,
	dateInverse = false;

	pointsbtn.click(function(e) {
		var output;
		e.preventDefault();
		li.sortElements(function(a, b){
			if ( pointInverse ) {
				output = parseInt($(a).attr('points'), 10) > parseInt($(b).attr('points'), 10) ? -1 : 1;
			} else {
				output = parseInt($(a).attr('points'), 10) > parseInt($(b).attr('points'), 10) ? 1 : -1;
			}
			return output;
		});
		if ( pointInverse ) {
			pointInverse = false;
			$('#order_points i.fa').addClass('fa-angle-down').removeClass('fa-angle-up');
		} else {
			pointInverse = true;
			$('#order_points i.fa').addClass('fa-angle-down').removeClass('fa-angle-up');
		}
	});

	datebtn.click(function(e) {
		var output;
		e.preventDefault();
		li.sortElements(function(a, b){
			if ( dateInverse ) {
				output = parseInt($(a).attr('date'), 10) > parseInt($(b).attr('date'), 10) ? -1 : 1;
			} else {
				output = parseInt($(a).attr('date'), 10) > parseInt($(b).attr('date'), 10) ? 1 : -1;
			}
			return output;
		});
		if ( dateInverse ) {
			dateInverse = false;
			$('#order_date i.fa').addClass('fa-angle-up').removeClass('fa-angle-down');		
		} else {
			dateInverse = true;
			$('#order_date i.fa').addClass('fa-angle-down').removeClass('fa-angle-up');
		}
	});
});

} )( jQuery );