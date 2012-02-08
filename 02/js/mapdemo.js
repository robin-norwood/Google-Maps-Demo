var conf = {
    map: {
	zoom: 17,
	minZoom: 15,
	mapTypeId: google.maps.MapTypeId.ROADMAP
    },
    regions: {
	strokeOpacity: 0.6,
	strokeWeight: 1,
	fillOpacity: 0.2
    },
    markers: {
    }
}

function createRegion (map, color, coords, name) {
    // Create a region on the current map

    var theRegion = new google.maps.Polygon({
	paths: coords,
	strokeColor: color,
	strokeOpacity: conf.regions.strokeOpacity,
	strokeWeight: conf.regions.strokeWeight,
	fillColor: color,
	fillOpacity: conf.regions.fillOpacity,
	map: map
    });

    return theRegion;
}

function initialize() {
    var myOptions = {
        center: new google.maps.LatLng(29.418979,-98.485163),
        zoom: conf.map.zoom,
	minZoom: conf.map.minZoom,
        mapTypeId: conf.map.mapTypeId,
	mapTypeControl: false
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    var regionOneCoords = [
	new google.maps.LatLng(29.42142395170644, -98.487684276474),
	new google.maps.LatLng(29.421232376153046, -98.48685949720192),
	new google.maps.LatLng(29.420679842198172, -98.4870190886383),
	new google.maps.LatLng(29.420588726373666, -98.48663285054016),
	new google.maps.LatLng(29.42020557175572, -98.48674952663231),
	new google.maps.LatLng(29.42009576498296, -98.48667308367538),
	new google.maps.LatLng(29.419960258589192, -98.48652019776154),
	new google.maps.LatLng(29.419720785640987, -98.48654567874718),
	new google.maps.LatLng(29.42091814473752, -98.48788678325462)
    ];

    var regionTwoCoords = [
	new google.maps.LatLng(29.42089478176818, -98.4878827599411),
	new google.maps.LatLng(29.420196226503087, -98.48812147654343),
	new google.maps.LatLng(29.418507057970217, -98.48818048514175),
	new google.maps.LatLng(29.418436967382807, -98.48715856350708),
	new google.maps.LatLng(29.418273422490806, -98.48657384194183),
	new google.maps.LatLng(29.41808184099682, -98.48613932408142),
	new google.maps.LatLng(29.417682322328986, -98.48551436938095),
	new google.maps.LatLng(29.417523448971885, -98.4853078392868),
	new google.maps.LatLng(29.418067822825265, -98.48470434225845)
    ];

    var regionThreeCoords = [
	new google.maps.LatLng(29.419724290127224, -98.48653629101563),
	new google.maps.LatLng(29.419957922270463, -98.48651215113449),
	new google.maps.LatLng(29.41999997599918, -98.4863163498764),
	new google.maps.LatLng(29.420058383926868, -98.48616614617157),
	new google.maps.LatLng(29.420224262258408, -98.4861178664093),
	new google.maps.LatLng(29.41984577890876, -98.48464265145111),
	new google.maps.LatLng(29.419742980718464, -98.48465606249619),
	new google.maps.LatLng(29.41963550977196, -98.48462924040604),
	new google.maps.LatLng(29.41956541996297, -98.48455950297165),
	new google.maps.LatLng(29.4195327113689, -98.48446562565613),
	new google.maps.LatLng(29.41951635706792, -98.4843529728775),
	new google.maps.LatLng(29.4195327113689, -98.48422422684479),
	new google.maps.LatLng(29.419537384025848, -98.48418131150055),
	new google.maps.LatLng(29.41950000276432, -98.48420545138168),
	new google.maps.LatLng(29.419460285158866, -98.48421081579971),
	new google.maps.LatLng(29.419408885881705, -98.48419204033661),
	new google.maps.LatLng(29.419373840905088, -98.48414644278336),
	new google.maps.LatLng(29.419366831908313, -98.48409011639404),
	new google.maps.LatLng(29.419383186233365, -98.48403379000473),
	new google.maps.LatLng(29.419425240199985, -98.48398819245148),
	new google.maps.LatLng(29.4195186933968, -98.4839560059433),
	new google.maps.LatLng(29.41926870590272, -98.48284288920212),
	new google.maps.LatLng(29.418035113748356, -98.48240300692368),
	new google.maps.LatLng(29.41807716827295, -98.48469897784042)
    ];

    var regionFourCoords = [
	new google.maps.LatLng(29.418044459199784, -98.48469093121338),
	new google.maps.LatLng(29.417516439847482, -98.48526492394257),
	new google.maps.LatLng(29.416245443960563, -98.48353221691895),
	new google.maps.LatLng(29.4147174241845, -98.48104849137115),
	new google.maps.LatLng(29.414801535962397, -98.48093583859253),
	new google.maps.LatLng(29.415021160832033, -98.48095193184662),
	new google.maps.LatLng(29.416170679001553, -98.48089828766632),
	new google.maps.LatLng(29.416315536059702, -98.48097875393677),
	new google.maps.LatLng(29.416670668618867, -98.48101630486298),
	new google.maps.LatLng(29.41688561667014, -98.48106994904327),
	new google.maps.LatLng(29.41713794641102, -98.48118796623993),
	new google.maps.LatLng(29.418053804650324, -98.4819389847641),
	new google.maps.LatLng(29.418432294675245, -98.48213210381317),
	new google.maps.LatLng(29.418628548207195, -98.48217501915741),
	new google.maps.LatLng(29.418834146738856, -98.48217501915741),
	new google.maps.LatLng(29.419119180378647, -98.48211601055908),
	new google.maps.LatLng(29.419278051240692, -98.48282947815704),
	new google.maps.LatLng(29.418016422842957, -98.48238423146057)
    ];

    regions = [];

    regions.push(createRegion(map, "#FF0000", regionOneCoords, "First Region"));
    regions.push(createRegion(map, "#0000FF", regionTwoCoords, "Second Region"));
    regions.push(createRegion(map, "#00FF00", regionThreeCoords, "Third Region"));
    regions.push(createRegion(map, "#FFFF00", regionFourCoords, "Fourth Region"));

    createMarker(map, new google.maps.LatLng(29.418810783290294, -98.48388626850891), "Rackspace booth");

    google.maps.event.addListener(map, 'mouseover', function () {
	map.setOptions({ draggableCursor: 'crosshair' });
    });

    google.maps.event.addListener(map, 'mouseout', function () {
	map.setOptions({ draggableCursor: 'default' });
    });

    google.maps.event.addListener(map, 'click', function (event) {
	placeLocation(map, event.latLng);
    });

    for (var x=0;x<regions.length;x++) {
	google.maps.event.addListener(regions[x], 'click', function (event) {
	    placeLocation(map, event.latLng);
	});
    }
}

function placeLocation(map, loc) {
    var descStr = "(" + loc.lat() + ", " + loc.lng() + ")";
    var marker = createMarker(map, loc, descStr);

    var latLngLi = document.createElement("li");
    latLngLi.appendChild(document.createTextNode(descStr + ","));
    document.getElementById("point_list").appendChild(latLngLi);

    return marker;
}

function createMarker(map, location, title) {
    return new google.maps.Marker({
	map: map,
	position: location,
	title: title
    });
}

function createArea(name, label, color, coords) {
    var theArea = new google.maps.Polygon({
	paths: coords,
	strokeColor: color,
	strokeOpacity: 0.8,
	strokeWeight: 2,
	fillColor: color,
	fillOpacity: 0.35
    });
}