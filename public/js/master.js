//////////////
// this file is the master runner
// put only invoked functions in here

// initialize gmaps from map.js map-styles.js
let map = initialize_gmaps();
let maputils = mapUtils();

// all types
let attractionTypes = ['hotel', 'restaurant', 'activity'];

// grab data
$.get('/api/attractions/')
    .then(attractions => {
        
        // setting maps bounds
        let bounds = new google.maps.LatLngBounds();
        
        // add markers to map
        attractionTypes.forEach(attType => {
            
            // for each attraction in attractions[attType]
            attractions[attType].forEach(att => {
                
                // add markers to map, and set bounds
                let coords = att.place.location;
                let marker = maputils.addMarker(coords, map, attType, att.name)
                bounds.extend(marker.position);
            });
            
        });
        
        // setting maps bounds
        map.fitBounds(bounds);
        
        
    })
    .catch(err => {
        console.log('WHOA we cannot use ajax to grab our data! in public/js/master.js')
        console.log(err);
    });

// add markers to map


// add markers to respective button
