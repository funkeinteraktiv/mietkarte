/* Copyright (c) 2013 Ryan Clark https://gist.github.com/rclark/5779673 */
L.TopoJSON = L.GeoJSON.extend({
	addData: function(jsonData) {
		if (jsonData.type === "Topology") {
			for (key in jsonData.objects) {
				geojson = topojson.feature(jsonData, jsonData.objects[key]);
				L.GeoJSON.prototype.addData.call(this, geojson);
			}
		} else {
			L.GeoJSON.prototype.addData.call(this, jsonData);
		}
	}
});