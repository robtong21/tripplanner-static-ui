function initialize_gmaps() {
    
    // initialize new google maps LatLng object
    var myLatlng = new google.maps.LatLng(41.8885,-87.6354);
    
    // set the map options hash
    var mapOptions = {
        center: myLatlng,
        zoom: 13,
        mapTypeControl: false,
        styles: dark,
        backgroundColor: 'dark grey',
        streetViewControl: false,
        scaleControl: false,
        zoomControl: false
    };
    // get the maps div's HTML obj
    var map_canvas_obj = document.getElementById("map-canvas");
    // initialize a new Google Map with the options
    var map = new google.maps.Map(map_canvas_obj, mapOptions);
    
    var icons = ['/images/glyphicons-474-bed.png', 
                 '/images/glyphicons-277-cutlery.png',
                 '/images/glyphicons-12-camera.png', 
                 '/images/glyphicons-49-star-empty.png'];
    
    // Add the base marker to the map
    var marker = new google.maps.Marker({
        position: myLatlng,
        title: "this is you if you are in class",
        icon: icons[3]
    });
    // Add the marker to the map by calling setMap()
    marker.setMap(map);
    
    // // add all the markers
    // var marker, i;
    // for (i = 0; i < locations.length; i++) {
    //   marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    //     map: map
    //   });
    //
    //   // google.maps.event.addListener(marker, 'click', (function(marker, i) {
    //   //   return function() {
    //   //     infowindow.setContent(locations[i][0]);
    //   //     infowindow.open(map, marker);
    //   //   }
    //   // })(marker, i));
    //
    // }
    
}

$(document).ready(function() {
    initialize_gmaps();
});

// $(window).resize(function(){
//     $('#map_canvas').height($( window ).height());
//     initialize_gmaps();
// });
