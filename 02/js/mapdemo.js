var mapManager = function () {
    var conf = {
	map: {
	    zoom: 17,
	    minZoom: 15,
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	    elemId: "map_canvas"
	},
	regions: {
	    strokeOpacity: 0.6,
	    strokeWeight: 1,
	    fillOpacity: 0.2
	},
	markers: {
	}
    };

    var self = this; // Private reference to "this" for private functions
    var regions = {};
    var markers = {};

    var map = new google.maps.Map(
	document.getElementById(conf.map.elemId),
	{
            center: new google.maps.LatLng(29.418979,-98.485163),
            zoom: conf.map.zoom,
	    minZoom: conf.map.minZoom,
            mapTypeId: conf.map.mapTypeId,
	    mapTypeControl: false
	});

    google.maps.event.addListener(map, 'mouseover', function () {
	map.setOptions({ draggableCursor: 'crosshair' });
    });

    google.maps.event.addListener(map, 'mouseout', function () {
	map.setOptions({ draggableCursor: 'default' });
    });

    google.maps.event.addListener(map, 'click', function (event) {
	placeLocation(event.latLng);
    });

    this.createRegion = function (name, color, coordsIn) {
	// Create a region

	var coords = [];
	if ("lat" in coordsIn[0]) { // coordsIn is probably an array of latLngs
	    coords = coordsIn;
	}
	else { // coords is probably an array of two-element tuples
	    jQuery.each(coordsIn, function (idx, val) {
		coords.push(new google.maps.LatLng(val[0], val[1]));
	    });
	}

	regions[name] = new google.maps.Polygon({
	    paths: coords,
	    strokeColor: color,
	    strokeOpacity: conf.regions.strokeOpacity,
	    strokeWeight: conf.regions.strokeWeight,
	    fillColor: color,
	    fillOpacity: conf.regions.fillOpacity
	});

	google.maps.event.addListener(regions[name], 'click', function (event) {
	    placeLocation(event.latLng);
	});

	return regions[name];
    };

    this.createMarker = function(name, title, location) {
	var loc = null;
	if ("lat" in location) {
	    loc = location
	}
	else {
	    loc = new google.maps.LatLng(location[0], location[1]);
	}

	markers[name] = new google.maps.Marker({
	    position: loc,
	    title: title
	});

	return markers[name];
    };

    this.enableRegion = function (name) {
	// Put a region named "name" on the map
	regions[name].setMap(map);

	return true;
    };

    this.disableRegion = function (name) {
	regions[name].setMap(null);
    };

    this.enableMarker = function (name) {
	// Put a mark named "name" on the map
	markers[name].setMap(map);

	return true;
    };

    this.disableMarker = function (name) {
	markers[name].setMap(null);
    };

    var placeLocation = function (location) {
	var descStr = "(" + location.lat() + ", " + location.lng() + ")";

	var marker = new google.maps.Marker({
	    position: location,
	    map: map,
	    title: descStr
	});

	var latLngLi = document.createElement("li");
	latLngLi.appendChild(document.createTextNode(descStr + ","));
	document.getElementById("point_list").appendChild(latLngLi);
    };
};

function initialize() {

    var mgr = new mapManager();

    var data = {
	regions: {/*
	    first_region: {
		color: "#FF0000",
		coordinates: [
		    [29.42142395170644, -98.487684276474],
		    [29.421232376153046, -98.48685949720192],
		    [29.420679842198172, -98.4870190886383],
		    [29.420588726373666, -98.48663285054016],
		    [29.42020557175572, -98.48674952663231],
		    [29.42009576498296, -98.48667308367538],
		    [29.419960258589192, -98.48652019776154],
		    [29.419720785640987, -98.48654567874718],
		    [29.42091814473752, -98.48788678325462]
		]
	    },
	    second_region: {
		color: "#0000FF",
		coordinates: [
		    [29.42089478176818, -98.4878827599411],
		    [29.420196226503087, -98.48812147654343],
		    [29.418507057970217, -98.48818048514175],
		    [29.418436967382807, -98.48715856350708],
		    [29.418273422490806, -98.48657384194183],
		    [29.41808184099682, -98.48613932408142],
		    [29.417682322328986, -98.48551436938095],
		    [29.417523448971885, -98.4853078392868],
		    [29.418067822825265, -98.48470434225845]
		]
	    },
	    third_region: {
		color: "#00FF00",
		coordinates: [
		    [29.419724290127224, -98.48653629101563],
		    [29.419957922270463, -98.48651215113449],
		    [29.41999997599918, -98.4863163498764],
		    [29.420058383926868, -98.48616614617157],
		    [29.420224262258408, -98.4861178664093],
		    [29.41984577890876, -98.48464265145111],
		    [29.419742980718464, -98.48465606249619],
		    [29.41963550977196, -98.48462924040604],
		    [29.41956541996297, -98.48455950297165],
		    [29.4195327113689, -98.48446562565613],
		    [29.41951635706792, -98.4843529728775],
		    [29.4195327113689, -98.48422422684479],
		    [29.419537384025848, -98.48418131150055],
		    [29.41950000276432, -98.48420545138168],
		    [29.419460285158866, -98.48421081579971],
		    [29.419408885881705, -98.48419204033661],
		    [29.419373840905088, -98.48414644278336],
		    [29.419366831908313, -98.48409011639404],
		    [29.419383186233365, -98.48403379000473],
		    [29.419425240199985, -98.48398819245148],
		    [29.4195186933968, -98.4839560059433],
		    [29.41926870590272, -98.48284288920212],
		    [29.418035113748356, -98.48240300692368],
		    [29.41807716827295, -98.48469897784042]
		]
	    },
	    fourth_region: {
		color: "#FFFF00",
		coordinates: [
		    [29.418044459199784, -98.48469093121338],
		    [29.417516439847482, -98.48526492394257],
		    [29.416245443960563, -98.48353221691895],
		    [29.4147174241845, -98.48104849137115],
		    [29.414801535962397, -98.48093583859253],
		    [29.415021160832033, -98.48095193184662],
		    [29.416170679001553, -98.48089828766632],
		    [29.416315536059702, -98.48097875393677],
		    [29.416670668618867, -98.48101630486298],
		    [29.41688561667014, -98.48106994904327],
		    [29.41713794641102, -98.48118796623993],
		    [29.418053804650324, -98.4819389847641],
		    [29.418432294675245, -98.48213210381317],
		    [29.418628548207195, -98.48217501915741],
		    [29.418834146738856, -98.48217501915741],
		    [29.419119180378647, -98.48211601055908],
		    [29.419278051240692, -98.48282947815704],
		    [29.418016422842957, -98.4823842314605]
		]
	    }
	*/},
	markers: {
	    rackspace_booth: {
		name: "Rackspace booth",
		location: new google.maps.LatLng(29.418810783290294, -98.48388626850891)
	    },
	    place_two: {
		name: "Another location",
		location: new google.maps.LatLng(29.4191565617803, -98.48557069577026)
	    }
	}
    };

    jQuery.each(data.regions, function (idx, val) {
	mgr.createRegion(idx, val.color, val.coordinates);
    });

    jQuery.each(data.markers, function (idx, val) {
	mgr.createMarker(idx, val.name, val.location);
    });

    mgr.enableRegion("first_region");
    mgr.enableRegion("second_region");
    mgr.enableRegion("third_region");
    mgr.enableRegion("fourth_region");

    mgr.disableRegion("third_region");

    mgr.enableMarker("rackspace_booth");
    mgr.enableMarker("place_two");

    mgr.disableMarker("place_two");

    
}

