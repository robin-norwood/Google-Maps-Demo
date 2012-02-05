function initialize() {
    var myOptions = {
        center: new google.maps.LatLng(28.980, -98.020),
        zoom: 14,
	minZoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
	mapTypeControl: false
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    var cityBorderCoords = [
	new google.maps.LatLng(28.98344591361811, -98.03313064575195),
	new google.maps.LatLng(28.991329142428054, -98.02240180969238),
	new google.maps.LatLng(28.98404656172234, -98.01527786254883),
	new google.maps.LatLng(28.98509768751163, -98.01338958740234),
	new google.maps.LatLng(28.982695098582816, -98.00995635986328),
	new google.maps.LatLng(28.980742953985736, -98.0124454498291),
	new google.maps.LatLng(28.97751432630694, -98.01012802124023),
	new google.maps.LatLng(28.977063812108575, -98.01459121704102),
	new google.maps.LatLng(28.97803992372558, -98.0164794921875),
	new google.maps.LatLng(28.977889753307, -98.01974105834961),
	new google.maps.LatLng(28.97728906945298, -98.0208568572998),
	new google.maps.LatLng(28.976613295948496, -98.02128601074219),
	new google.maps.LatLng(28.975637170871945, -98.02154350280762),
	new google.maps.LatLng(28.97375998138028, -98.02102851867676),
	new google.maps.LatLng(28.973234362219856, -98.02154350280762),
	new google.maps.LatLng(28.972783829385907, -98.02145767211914),
	new google.maps.LatLng(28.972483473073517, -98.02068519592285),
	new google.maps.LatLng(28.972032936970315, -98.02025604248047),
	new google.maps.LatLng(28.97090658813079, -98.02077102661133),
	new google.maps.LatLng(28.9761627778267, -98.02523422241211),
	new google.maps.LatLng(28.97713889794454, -98.0260066986084),
	new google.maps.LatLng(28.977739582670463, -98.02729415893555)
    ];

    var cityBorder = new google.maps.Polygon({
	paths: cityBorderCoords,
	strokeColor: "#FF0000",
	strokeOpacity: 0.8,
	strokeWeight: 2,
	fillColor: "#FF0000",
	fillOpacity: 0.35
    });

    cityBorder.setMap(map);

    var otherBorderCoords = [
	new google.maps.LatLng(28.983266090790195, -98.0334754180908),
	new google.maps.LatLng(28.97958703864857, -98.02969886779783),
	new google.maps.LatLng(28.97515698591802, -98.0375094604492),
	new google.maps.LatLng(28.977109235922374, -98.03914024353026),
	new google.maps.LatLng(28.97866725516855, -98.0389685821533),
	new google.maps.LatLng(28.979831061464623, -98.03836776733397),
	new google.maps.LatLng(28.980319105369784, -98.03776695251463)
    ];

    var otherBorder = new google.maps.Polygon({
	paths: otherBorderCoords,
	strokeColor: "#0000FF",
	strokeOpacity: 0.8,
	strokeWeight: 2,
	fillColor: "#0000FF",
	fillOpacity: 0.35
    });

    otherBorder.setMap(map);

    var thirdBorderCoords = [
	new google.maps.LatLng(28.979230388882083, -98.02914096832274),
	new google.maps.LatLng(28.979061449089848, -98.0294413757324),
	new google.maps.LatLng(28.974856636494046, -98.03725196838377),
	new google.maps.LatLng(28.96952528914515, -98.03253128051756),
	new google.maps.LatLng(28.96254155952677, -98.03407623291014),
	new google.maps.LatLng(28.970726743507377, -98.0210299682617),
	new google.maps.LatLng(28.977071693000447, -98.0265231323242),
	new google.maps.LatLng(28.977597292667763, -98.02755310058592)
    ];

    var thirdBorder = new google.maps.Polygon({
	paths: thirdBorderCoords,
	strokeColor: "#00FF00",
	strokeOpacity: 0.8,
	strokeWeight: 2,
	fillColor: "#00FF00",
	fillOpacity: 0.35
    });

    thirdBorder.setMap(map);

    google.maps.event.addListener(map, 'mouseover', function () {
	map.setOptions({ draggableCursor: 'crosshair' });
    });

    google.maps.event.addListener(map, 'mouseout', function () {
	map.setOptions({ draggableCursor: 'default' });
    });

    google.maps.event.addListener(map, 'click', function (event) {
	placeMarker(event.latLng);
    });

    google.maps.event.addListener(cityBorder, 'click', function (event) {
	placeMarker(event.latLng);
    });

    function placeMarker(location) {
	var descStr = "(" + location.lat() + ", " + location.lng() + ")";

	var marker = new google.maps.Marker({
	    position: location,
	    map: map,
	    title: descStr
	});

	var latLngLi = document.createElement("li");
	latLngLi.appendChild(document.createTextNode(descStr + ","));
	document.getElementById("point_list").appendChild(latLngLi);
    }

}
