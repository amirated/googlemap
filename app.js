

//google map initializatio
function initMap() {
  //html map selector
  const mapUi = document.getElementById('map');
  // google map option
  const option = {
    zoom: 7,
    center: {
      lat: 23.8103,
      lng: 90.4125
    },
    styles: [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#212121"
        }]
      },
      {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#212121"
        }]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ff8080"
        }]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#ff8080"
        }]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#bdbdbd"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#181818"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1b1b1b"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#2c2c2c"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#8a8a8a"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#373737"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#3c3c3c"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ff8080"
        }]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [{
          "color": "#4e4e4e"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#3d3d3d"
        }]
      }
    ]


  };


// google map constructor input pass two opject option and html ui
  const map = new google.maps.Map(mapUi, option);

  //add marker for each location
  addMarker({
    croods: {
      lat: 23.8103,
      lng: 90.4125
    },
    iconImage: "/marker.png",
    content: "<h1>Dhaka</h1>"
  });

  addMarker({
    croods: {
      lat: 22.3569,
      lng: 91.7832
    },
    iconImage: "/marker.png",
    content: "<h1>Chitagong</h1>"
  });
  addMarker({
    croods: {
      lat: 22.3569,
      lng: 91.7832
    },
    iconImage: "/marker.png",
    content: "<h1>Chittagong</h1>"
  });

  addMarker({
    croods: {
      lat: 24.3636,
      lng: 88.6241
    },
    iconImage: "/marker.png",
    content: "<h1>Rajshai</h1>"
  });

  addMarker({
    croods: {
      lat: 24.8949,
      lng: 91.8687
    },
    iconImage: "/marker.png",
    content: "<h1>Sylet</h1>"
  });



 // add market fucntion 
  function addMarker(props) {
    const marker = new google.maps.Marker({
      position: props.croods,
      map: map,
      icon: props.iconImage,
      content: "<h1> THis is Fist Maker</h1>"
    });
     //map info constructor
    const mapInfo = new google.maps.InfoWindow({
      content: props.content,
    })
    // event listenr for map marker click
    marker.addListener("click", function () {
      mapInfo.open(map, marker);
    })

  }



}