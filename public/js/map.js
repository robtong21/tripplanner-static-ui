function initialize_gmaps() {
    
    // map utilities/styles
    let maputils = mapUtils();
    
    // initialize new google maps LatLng object
    let coords = [41.8885,-87.6354];
    let myLatlng = new google.maps.LatLng(...coords);
    
    // set the map options hash
    var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeControl: false,
        styles: maputils.dark,
        backgroundColor: 'dark grey',
        streetViewControl: false,
        scaleControl: false,
        zoomControl: false
    };
    
    // get the maps div's HTML obj
    let map_canvas_obj = document.getElementById("map-canvas");
    
    // initialize a new Google Map with the options
    let map = new google.maps.Map(map_canvas_obj, mapOptions);
    
    // initialize first your-location marker
    maputils.addMarker(coords, map, 'other', 'you are here');
    
    return map;
}