
let mapUtils = (function () {
    // this function returns enclosed map styles for map.js
    // and functions for adding and removing markers from the map
    
    return function () {
    
        ///////////////
        // styles
        
        let light = [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}];

        let dark = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];
    
        let icons = {
            hotel: '/images/glyphicons-474-bed.png', 
            restaurant: '/images/glyphicons-277-cutlery.png',
            activity: '/images/glyphicons-12-camera.png', 
            other: '/images/glyphicons-49-star-empty.png'
        };
    
        //////////////////
        // markers
        let addMarker = function (coords, map, type, title) {
            /// coordinates, map necessary
            /// type, title, optional
            
            // coordinates
            let latlong = new google.maps.LatLng(...coords);
            
            // marker
            let marker = new google.maps.Marker({
                position: latlong,
                title: title || null,
                icon: icons[type] || icons.other
            });
            
            marker.setMap(map)
            
            return marker;
        };
        
        let removeMarker = marker => { marker.setmap(null) };
    
        return {
            light: light,
            dark: dark,
            icons: icons,
            addMarker: addMarker,
            removeMarker: removeMarker
        }
    
    }
})();









//
//
//
// // create base/center marker to the map
// var marker = new google.maps.Marker({
//     position: myLatlng,
//     title: "this is you if you are in class",
//     icon: mapStyles.icons[3]
// });
//
// // add marker to the map by calling setMap()
// marker.setMap(map);
//
// // // add all the markers
// // var marker, i;
// // for (i = 0; i < locations.length; i++) {
// //   marker = new google.maps.Marker({
// //     position: new google.maps.LatLng(locations[i][1], locations[i][2]),
// //     map: map
// //   });
// //
// //   // google.maps.event.addListener(marker, 'click', (function(marker, i) {
// //   //   return function() {
// //   //     infowindow.setContent(locations[i][0]);
// //   //     infowindow.open(map, marker);
// //   //   }
// //   // })(marker, i));
// //
// // }
//
//
// // $(window).resize(function(){
// //     $('#map_canvas').height($( window ).height());
// //     initialize_gmaps();
// // });
//
//
