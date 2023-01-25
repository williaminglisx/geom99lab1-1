// This creates  polyline showing the path of my flight to canada from India via Maldives, and Doha
// source: https://developers.google.com/maps/documentation/javascript/examples/polyline-simple

 function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2.5,
    center: { lat: 28.556, lng: 77.100 },
    mapTypeId: "terrain",
  });
  const flightPlanCoordinates = [
    { lat: 28.556, lng: 77.100 },
    { lat: 4.188, lng: 73.524 },
    { lat: 25.260, lng: 51.613 },
    { lat: 43.677, lng: -79.624 },
  ];

  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF69B4",
    strokeOpacity: 0.5,
    strokeWeight: 3,
  });

  // creating the markers 
  // source: https://developers.google.com/maps/documentation/javascript/examples/marker-simple
  const marker1 = new google.maps.Marker({
    position: { lat: 28.556, lng: 77.100},
    map: map,
    title: 'New Delhi, India'
  });
  
  const marker2 = new google.maps.Marker({
    position: {lat: 4.188, lng: 73.524},
    map: map,
    title: 'Male, Maldives'
  });
  
  const marker3 = new google.maps.Marker({
    position: {lat: 25.260, lng: 51.613},
    map: map,
    title: 'Doha, Qatar'
  });

  const marker4 = new google.maps.Marker({
    position: {lat: 43.677, lng: -79.624},
    map: map,
    title: 'Toronto, Canada'
  });
  
  flightPath.setMap(map);

const coordMapType = new CoordMapType(new google.maps.Size(256, 256));

map.overlayMapTypes.insertAt(0, coordMapType);
}
  





