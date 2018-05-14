// $.getJSON("test.json", function( data ) {
// 	var items = [];
// 	$.each( data, function( key, val)
// 	{
// 		items.push("<li id='" + key + "'>" + val + "</li>" );
// 	});

// 	$( "<ul/>", {
// 		"class": "car-list",
// 		html: items.join("")
// 	}).appendTo("body" );
// });

// $.getScript( "test.json", function( data, textStatus, jqxhr ) {
//   console.log( data ); // Data returned
//   console.log( textStatus ); // Success
//   console.log( jqxhr.status ); // 200
//   console.log( "Load was performed." );
// });