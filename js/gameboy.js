/*
Sort the date / points colums on click
 */

( function( $ ) {

$( document ).ready(function() {

	//show the video after the page loads
	$('.video').show();

	var datebtn = $('#order_date'),
	pointsbtn = $('#order_points'),
	li = $('li.sortable'),
	pointInverse = false,
	dateInverse = false,
	lastClicked = "points";

	if ( Cookies.get('cookiepointInverse') && Cookies.get('cookiedateInverse') && Cookies.get('cookielastClicked') ) {
		if ( Cookies.get ('cookiepointInverse') == "true" ) {
			pointInverse = true;
		} else {
			pointInverse = false;
		}

		if ( Cookies.get ('cookiedateInverse') == "true" ) {
			dateInverse = true;
		} else {
			dateInverse = false;
		}

		lastClicked = Cookies.get ('cookielastClicked');
		console.log ( "the cookies are set!" );

		console.log ( "pointInverse = " + pointInverse );
		console.log ( "dateInverse = " + dateInverse );
		console.log ( "lastClicked = " + lastClicked );

		if ( lastClicked == "points" ) {

			console.log ( "inside last lcicked pointInverse = " + pointInverse );

			li.sortElements(function(a, b){
				if ( ! pointInverse ) {
					output = parseInt($(a).attr('points'), 10) > parseInt($(b).attr('points'), 10) ? -1 : 1;
				} else {
					output = parseInt($(a).attr('points'), 10) > parseInt($(b).attr('points'), 10) ? 1 : -1;
				}
				return output;
			});
			if ( ! pointInverse ) {
				$('#order_points i.fa').addClass('fa-angle-up').removeClass('fa-angle-down');					
			} else {
				$('#order_points i.fa').addClass('fa-angle-down').removeClass('fa-angle-up');	
			}

		} else {
			li.sortElements(function(a, b){
				if ( ! dateInverse ) {
					output = parseInt($(a).attr('date'), 10) > parseInt($(b).attr('date'), 10) ? -1 : 1;
				} else {
					output = parseInt($(a).attr('date'), 10) > parseInt($(b).attr('date'), 10) ? 1 : -1;
				}
				return output;
			});

			if ( ! dateInverse ) {
				$('#order_date i.fa').addClass('fa-angle-up').removeClass('fa-angle-down');
			} else {
				$('#order_date i.fa').addClass('fa-angle-down').removeClass('fa-angle-up');		
			}

		}

	} else {
		console.log ( "the cookies are not set!" );

		li.sortElements(function(a, b){
			if ( ! pointInverse ) {
				output = parseInt($(a).attr('points'), 10) > parseInt($(b).attr('points'), 10) ? -1 : 1;
			} else {
				output = parseInt($(a).attr('points'), 10) > parseInt($(b).attr('points'), 10) ? 1 : -1;
			}
			return output;
		});
		if ( ! pointInverse ) {
			$('#order_points i.fa').addClass('fa-angle-up').removeClass('fa-angle-down');					
		} else {
			$('#order_points i.fa').addClass('fa-angle-down').removeClass('fa-angle-up');	
		}

		Cookies.set ('cookiepointInverse', pointInverse);
		Cookies.set ('cookiedateInverse', dateInverse);
		Cookies.set ('cookielastClicked', lastClicked);

		console.log ( "pointInverse = " + pointInverse );
		console.log ( "dateInverse = " + dateInverse );
		console.log ( "lastClicked = " + lastClicked );

	}

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

		dateInverse = true;	
		$('#order_date i.fa').addClass('fa-angle-down').removeClass('fa-angle-up');

		if ( pointInverse ) {
			pointInverse = false;	
			dateInverse = true;	
			$('#order_points i.fa').addClass('fa-angle-up').removeClass('fa-angle-down');					
		} else {
			pointInverse = true;
			dateInverse = false;	
			$('#order_points i.fa').addClass('fa-angle-down').removeClass('fa-angle-up');	
		}

		lastClicked = "points";
		Cookies.set ('cookiepointInverse', pointInverse);
		Cookies.set ('cookiedateInverse', dateInverse);
		Cookies.set ('cookielastClicked', lastClicked);

		console.log ( "pointInverse = " + pointInverse );
		console.log ( "dateInverse = " + dateInverse );
		console.log ( "lastClicked = " + lastClicked );

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

		pointInverse = true;	
		$('#order_points i.fa').addClass('fa-angle-down').removeClass('fa-angle-up');

		if ( dateInverse ) {
			dateInverse = false;	
			pointInverse = true;
			$('#order_date i.fa').addClass('fa-angle-up').removeClass('fa-angle-down');
		} else {
			dateInverse = true;
			pointInverse = false;
			$('#order_date i.fa').addClass('fa-angle-down').removeClass('fa-angle-up');		
		}

		lastClicked = "date";
		Cookies.set ('cookiepointInverse', pointInverse);
		Cookies.set ('cookiedateInverse', dateInverse);
		Cookies.set ('cookielastClicked', lastClicked);

		console.log ( "pointInverse = " + pointInverse );
		console.log ( "dateInverse = " + dateInverse );
		console.log ( "lastClicked = " + lastClicked );

	});
});

} )( jQuery );