//Initialises the map
function initMap() {
  // The location of the little green larder
  const center = {
    lat: 56.459613,
    lng: -2.979829
  };
  // The map, centered at the little green larder
  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 15,
      center: center
    }
  );

  map.data.addGeoJson(
    {
      "type": "FeatureCollection",
      "features": [{
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-2.992335, 56.455926]
          },
          "properties": {
            "name": "The Little Green Larder",
            "description": "Dundee's first completely zero-waste shop!",
            "address": "272 Perth Rd, Dundee DD2 1AE"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-2.967386, 56.461126]
          },
          "properties": {
            "name": "Birchwood Food Emporium",
            "description": "Dundee's largest package-free shopping choices and refillery!",
            "address": "28 - 32 Commercial St, Dundee DD1 3EQ"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-2.973174, 56.458481]
          },
          "properties": {
            "name": "Marwick's Vegan Kitchen",
            "description": "Dundee's all-vegan cafe featuring an in-house zero-waste shop!",
            "address": "118 Nethergate, Dundee DD1 4EH"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-2.985578, 56.462532]
          },
          "properties": {
            "name": "Tayside Re-Users",
            "description": "A Dundee warehouse specialising in refurbished items that have been donated to be reused!",
            "address": "73-75 Douglas St, Dundee DD1 5AN"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-2.992750, 56.456210]
          },
          "properties": {
            "name": "Le freak records",
            "description": "An up-cycling focused record shop in Dundee!",
            "address": "159 Perth Rd, Dundee DD2 1AR"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-2.973949, 56.458103]
          },
          "properties": {
            "name": "Groucho's Record Store",
            "description": "A sustainable Dundee CD, DVD and record store!",
            "address": "132 Nethergate, Dundee DD1 4ED"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-2.979829, 56.459613]
          },
          "properties": {
            "name": "Spex Pistols",
            "description": "A unique optical boutique in Dundee that encourages reusablity and sustainability!",
            "address": "4 Johnston's Ln, Dundee DD1 5ET"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-2.985462, 56.456173]
          },
          "properties": {
            "name": "Gate Church International",
            "description": "As the people beind Dundee's West End Community Fridge, this church aims to be the greenest in Scotland!",
            "address": "158 Perth Rd, Dundee DD1 4JS"
          }
        }
      ]
    }
  );

  var infoWindow = new google.maps.InfoWindow();

  map.data.addListener('click', function(event) {
    var feature = event.feature;
    var content = ('<h3 class="infoWindow">' + feature.getProperty("name") + '</h3>' +
      '<p>' + feature.getProperty("description") + '</p>' +
      '<p>' + feature.getProperty("address") + '</p>'
    );

    infoWindow.setContent(content);
    infoWindow.setPosition(feature.getGeometry().get());
    infoWindow.open(map);
  });

}
