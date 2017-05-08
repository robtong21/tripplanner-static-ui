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
    
    // Add the marker to the map
    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!"
    });
    // Add the marker to the map by calling setMap()
    marker.setMap(map);
}

$(document).ready(function() {
    initialize_gmaps();
});
