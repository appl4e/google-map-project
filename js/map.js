var icons = {
                hotels: {icon: "images/blue-icon2.png"},
                residence: {icon: "images/yellow-icon2.png"},
                special: {icon: "images/tower-icon2.png"},
                dining: {icon: "images/red-icon2.png"},
                misc: {icon: "images/violet-icon2.png"}
            };
var markerGroups = {
    "hotels": [],
        "misc": [],
        "dining": [],
        "residence": [],
        "special": []
};


function initMap(){
                    var mapDiv = document.getElementById('map');
                    var directionsService = new google.maps.DirectionsService;
                    var directionsDisplay = new google.maps.DirectionsRenderer({polylineOptions: {strokeColor: "#8DC53E"}, suppressMarkers: true,preserveViewport: true});
                    

                    var map = new google.maps.Map(mapDiv, {
                        center: {lat: 32.780359, lng:  -96.799632},
                        zoom: 17,
                    });   
                    directionsDisplay.setMap(map);
                    var features = [
                        {
                            position: new google.maps.LatLng(32.780044, -96.799414),
                            type: "hotels",
                            name: 'Adolphus Hotel',
                            text: "<b class='text-capitalize'>"+"Hotels"+"</b><p>"+"Adolphus Hotel"+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.780714, -96.797859),
                            type: "hotels",
                            name: 'The Joule',
                            text: "<b class='text-capitalize'>Hotels</b><p>"+"The Joule"+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.777144, -96.800626),
                            type: "hotels",
                            name: "The A-Loft",
                            text: "<b class='text-capitalize'>Hotels</b><p>"+"The A-Loft"+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.780196, -96.799072),
                            type: "hotels",
                            name: "The Magnolia Hotel",
                            text: "<b class='text-capitalize'>Hotels</b><p>"+"The Magnolia Hotel"+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(33.759146, -84.395020),
                            type: "hotels",
                            name: "The Omni",
                            text: "<b class='text-capitalize'>Hotels</b><p>"+"The Omni"+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.782000, -96.794378),
                            type: "hotels",
                            name: "Indigo",
                            text: "<b class='text-capitalize'>Hotels</b><p>"+"Indigo"+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.780570, -96.802127),
                            type: "hotels",
                            name: "Westin",
                            text: "<b class='text-capitalize'>Hotels</b><p>"+"Westin"+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.780570, -96.802127),
                            type: "hotels",
                            name: "Sheraton",
                            text: "<b class='text-capitalize'>Hotels</b><p>"+"Sheraton"+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.781081, -96.802813),
                            type: "hotels",
                            name: "Homewood Suites by Hilton",
                            text: "<b class='text-capitalize'>Hotels</b><p>"+"Homewood Suites by Hilton"+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.781081, -96.802813),
                            type: "hotels",
                            name: 'Statler',
                            text: "<b class='text-capitalize'>Hotels</b><p>"+'Statler'+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7857922,-96.7995614),
                            type: 'misc',
                            name: '24 Hour Fitnes',
                            text: "<b class='text-capitalize'>Misc</b><p>"+'24 Hour Fitnes'+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7818297,-96.7986015),
                            type: 'misc',
                            name: 'Trophy Gym',
                            text: "<b class='text-capitalize'>Misc</b><p>"+'Trophy Gym'+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7805616,-96.8001223),
                            type: 'misc',
                            name: 'Chase Bank',
                            text: "<b class='text-capitalize'>Misc</b><p>"+'Chase Bank'+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7801337,-96.8059252),
                            type: 'misc',
                            name: 'Fed Ex Office',
                            text: "<b class='text-capitalize'>Misc</b><p>"+'Fed Ex Office'+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7801337,-96.8059252),
                            type: 'misc',
                            name: 'Alpha Graphics',
                            text: "<b class='text-capitalize'>Misc</b><p>"+'Alpha Graphics'+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7827205,-96.8044697),
                            type: 'misc',
                            name: 'CVS',
                            text: "<b class='text-capitalize'>Misc</b><p>"+'CVS'+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7833287,-96.8013507),
                            type: 'misc',
                            name: 'Post Office',
                            text: "<b class='text-capitalize'>Misc</b><p>"+'Post Office'+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7827026,-96.7971747),
                            type: 'misc',
                            name: 'Majestic Theater',
                            text: "<b class='text-capitalize'>Misc</b><p>"+'Majestic Theater'+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7876668,-96.8020378),
                            type: 'misc',
                            name: 'Winespear Opera House',
                            text: "<b class='text-capitalize'>Misc</b><p>"+'Winespear Opera House'+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7896218,-96.8004486),
                            type: 'misc',
                            name: 'Meyerson Symphony Center',
                            text: "<b class='text-capitalize'>Misc</b><p>"+'Meyerson Symphony Center'+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7875643,-96.8030815),
                            type: 'misc',
                            name: 'Dallas Museum of Art',
                            text: "<b class='text-capitalize'>Misc</b><p>"+'Dallas Museum of Art'+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7893696,-96.8039657),
                            type: 'misc',
                            name: 'Klyde Warren Park',
                            text: "<b class='text-capitalize'>Misc</b><p>"+'Klyde Warren Park'+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7854842,-96.8083503),
                            type: 'misc',
                            name: 'Perot Museu',
                            text: "<b class='text-capitalize'>Misc</b><p>"+'Perot Museu'+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7903557,-96.8127559),
                            type: 'misc',
                            name: 'American Airlines Center',
                            text: "<b class='text-capitalize'>Misc</b><p>"+'American Airlines Center'+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7850411,-96.8104386),
                            type: 'misc',
                            name: 'House of Blues',
                            text: "<b class='text-capitalize'>Misc</b><p>"+'House of Blues'+"</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.781630, -96.796828),
                            type: 'dining',
                            name: '',
                            text: "<b class='text-capitalize'>Dining</b><p>Dallas Chop House</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7810521,-96.7983608),
                            type: 'dining',
                            name: '',
                            text: "<b class='text-capitalize'>Dining</b><p>Wild Salsa</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7810611,-96.7983608),
                            type: 'dining',
                            name: '',
                            text: "<b class='text-capitalize'>Dining</b><p>Chop House Burger</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.780766,-96.8015435),
                            type: 'dining',
                            name: '',
                            text: "<b class='text-capitalize'>Dining</b><p>Dallas Fish Market</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.779997,-96.8018498),
                            type: 'dining',
                            name: '',
                            text: "<b class='text-capitalize'>Dining</b><p>The French Room</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7807845,-96.7995607),
                            type: 'dining',
                            name: '',
                            text: "<b class='text-capitalize'>Dining</b><p>The Zodiac Room</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7805616,-96.8008098),
                            type: 'dining',
                            name: '',
                            text: "<b class='text-capitalize'>Dining</b><p>Iron Cactus</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7806245,-96.8005507),
                            type: 'dining',
                            name: '',
                            text: "<b class='text-capitalize'>Dining</b><p>CBD Provisions</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.8038875,-96.8018867),
                            type: 'dining',
                            name: '',
                            text: "<b class='text-capitalize'>Dining</b><p>Frankie's Sports Bar</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7802598,-96.8021739),
                            type: 'dining',
                            name: '',
                            text: "<b class='text-capitalize'>Dining</b><p>The Mitchell</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7802598,-96.8021739),
                            type: 'dining',
                            name: '',
                            text: "<b class='text-capitalize'>Dining</b><p>Tei-An</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7802895,-96.8020337),
                            type: 'dining',
                            name: '',
                            text: "<b class='text-capitalize'>Dining</b><p>Which Wich</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7811275,-96.8020027),
                            type: 'dining',
                            name: '',
                            text: "<b class='text-capitalize'>Dining</b><p>Jimmy Johns</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7813164,-96.8008815),
                            type: 'dining',
                            name: '',
                            text: "<b class='text-capitalize'>Dining</b><p>Campisis</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.782828,-96.8015271),
                            type: 'dining',
                            name: '',
                            text: "<b class='text-capitalize'>Dining</b><p>Dakota's</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7813552,-96.8087449),
                            type: 'dining',
                            name: '',
                            text: "<b class='text-capitalize'>Dining</b><p>Y.O. Ranch</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7816714,-96.8087798),
                            type: 'dining',
                            name: '',
                            text: "<b class='text-capitalize'>Dining</b><p>Palm Restaurant</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.780804,-96.8021258),
                            type: 'residence',
                            name: '',
                            text: "<b class='text-capitalize'>Residence</b><p>Third Rail Lofts</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7808745,-96.8014927),
                            type: 'residence',
                            name: '',
                            text: "<b class='text-capitalize'>Residence</b><p>Kirby Building</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7805377,-96.8028821),
                            type: 'residence',
                            name: '',
                            text: "<b class='text-capitalize'>Residence</b><p>Davis Building</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7814137,-96.7997078),
                            type: 'residence',
                            name: '',
                            text: "<b class='text-capitalize'>Residence</b><p>Wilson Building</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7798207,-96.8005875),
                            type: 'residence',
                            name: '',
                            text: "<b class='text-capitalize'>Residence</b><p>DP &amp; L Flats</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7791535,-96.8030342),
                            type: 'residence',
                            name: '',
                            text: "<b class='text-capitalize'>Residence</b><p>Manor House</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7810521,-96.7983572),
                            type: 'residence',
                            name: '',
                            text: "<b class='text-capitalize'>Residence</b><p>Mercantile Place</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7819401,-96.8011057),
                            type: 'residence',
                            text: "<b class='text-capitalize'>Residence</b><p>LTV Tower</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7826195,-96.8018327),
                            type: 'residence',
                            name: '',
                            text: "<b class='text-capitalize'>Residence</b><p>The Mosaic</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.781003,-96.7986111),
                            type: 'residence',
                            name: '',
                            text: "<b class='text-capitalize'>Residence</b><p>The Element</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.779759,-96.7932326),
                            type: 'residence',
                            name: '',
                            text: "<b class='text-capitalize'>Residence</b><p>Camden at Farmers Market</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.7889025,-96.8045398),
                            type: 'residence',
                            name: '',
                            text: "<b class='text-capitalize'>Residence</b><p>SkyHouse</p>"
                        },
                        {
                            position: new google.maps.LatLng(32.780359, -96.799632),
                            type: 'special',
                            name: '',
                            text: "<b class='text-capitalize'>The Adolphus Tower</b><p></p>"
                        }
                        ];
                    var infowindow = new google.maps.InfoWindow();  
                    var infowindow2 = new google.maps.InfoWindow();
                    for(var i=0, feature; feature= features[i]; i++){
                        var type = feature.type;
                        var address = feature.text;
                        var marker = addMarker(feature, type, address);
                    }                                          
                    function addMarker(feature, type, html) {
                        var markercontent = html;
                        var marker = new google.maps.Marker({
                        position: feature.position,
                        icon: icons[feature.type].icon,
                        map: map,
                        type: feature.type                        
                      });
                        var distance;
                        var duration;
                      
                      function calculateAndDisplayRoute(directionService, directionsDisplay, distance, duration){
                        var start = new google.maps.LatLng(32.780359, -96.799632);
                        var end = feature.position;
                        waypts =[];
                        directionService.route({
                            origin: start,
                            destination: end,
                            waypoints: waypts,
                            optimizeWaypoints: true,
                            travelMode: 'WALKING',
                            unitSystem: google.maps.DirectionsUnitSystem.METRIC
                            }, function(response, status){
                                if(status == 'OK'){
                                    directionsDisplay.setDirections(response);
                                    
                                    var step= 1;
                                    infowindow2.setContent(response.routes[0].legs[0].distance.text +"<br>"+ response.routes[0].legs[0].duration.text) ;
                                    
                                    infowindow2.setPosition(response.routes[0].legs[0].steps[step].start_location);
                                    infowindow2.open(map);                                    
                                }
                                else{
                                    window.alert('Directions request failed due to ' + status);
                                }
                            }
                            );
                      }
                      // console.log(distance);
                      // console.log(duration);
                      google.maps.event.addListener(marker, 'click', function(){                        
                        calculateAndDisplayRoute(directionsService, directionsDisplay);
                        infowindow.setContent(markercontent);
                        infowindow.open(map,marker);
                      });
                      if (!markerGroups[type]) markerGroups[type] = [];
                        markerGroups[type].push(marker);
                        return marker;
                    
                    }

            }
            function toggleGroup(type) {
                    for (var i = 0; i < markerGroups[type].length; i++) {
                        var marker = markerGroups[type][i];
                        if (!marker.getVisible()) {
                            marker.setVisible(true);
                        } else {
                            marker.setVisible(false);
                        }
                    }
                };
                
                
                 
                



       
