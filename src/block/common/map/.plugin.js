//2gis map 
var CMS__TPL_PATH = '/';  
var CMS__TPL_PATH = '/wp-content/themes/azbn7theme/';  
//var CMS__TPL_PATH = './';
var iconUrl = CMS__TPL_PATH + 'img/svg/map-marker.svg';
var iconRetinaUrl = CMS__TPL_PATH + 'img/svg/map-marker.svg';
var iconSize = [49, 60];
var iconAnchor = [24, 60];  

function map_2gis(){
	var container = 'map-2gis';
	var data = $('#'+container).data('map');
	if(!data) return;
	var map;
	var center = data.center;
	var zoom = data.zoom;
	var geoclicker = data.geoclicker;
	var coords = data.placemarks;
	var objects = data.objects;

	if(DG){
	    DG.then(function(){
	        return DG.plugin('https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js');
	    }).then(function(){
	        map = DG.map(container,{
	            center: center,
	            zoom: zoom,
	            geoclicker: true,
	        });

	        var markers = DG.markerClusterGroup({
	            maxClusterRadius: 200,
	            spiderfyDistanceMultiplier: 0
	        });
	        var myIcon = DG.icon({
	            iconUrl: iconUrl,
	            iconRetinaUrl: iconRetinaUrl,
	            iconSize: iconSize,
	            iconAnchor: iconAnchor,
	            popupAnchor: [0, 0]
	        });
	        if(!objects){

		        for(var i = 0; i < coords.length; i++){
		            var coord = coords[i]['coord'];
		            var popHeading = '<div class="map__popup-heading">'+coords[i]['title']+'</div>'; 
		            var popContent = 
		            	'<div class="card__item  is--popup"><p class="card__heading  is--popup">'+coords[i]['title']+'</p></div>'
		            ; 
		            var obj_popup = DG.popup({
		                className: 'card__group  is--popup',
		            }).setContent(popContent);

		            var marker = DG.marker([coord[0], coord[1]],{icon: myIcon});
		            marker.bindPopup(obj_popup);
		            markers.addLayer(marker);
		        }
		        map.addLayer(markers);

	        } else{
		        for(var i = 0; i < objects.length; i++){
		            var coord = objects[i]['coord'];
		            var popContent = 
		            	'<div class="card__item  is--popup"><p class="card__preview  is--popup"><img class="img-responsive" src="'+objects[i]['preview']+'"></p><div><p class="card__heading  is--popup">'+objects[i]['title']+'</p><p class="card__label  is--popup"><span class="card__icon  is--popup  is--pointer"><svg class="icon-svg icon-pointer" role="img"><use xlink:href="'+CMS__TPL_PATH+'img/svg/sprite.svg#pointer"></use></svg></span>'+objects[i]['label']+'</p><p class="card__link  is--popup"><a href="'+objects[i]['link']+'" class="link__item">Подробнее</a></div></div>'
		            ; 
		            var obj_popup = DG.popup({
		                className: 'card__group  is--popup',
		            }).setContent(popContent);

		            var marker = DG.marker([coord[0], coord[1]],{icon: myIcon});
		            marker.bindPopup(obj_popup);
		            markers.addLayer(marker);
		        }
		        map.addLayer(markers);

	        }
	    });

		$(document.body).on('click', '[data-view-office]', null, function(event){
			event.preventDefault();
			var btn = $(this);
			var coord = btn.attr('data-coord');
			var coord_arr = coord.split(',');
			console.dir(coord_arr);
			var lat = parseFloat((coord_arr[0] || '').trim());
			var lng = parseFloat((coord_arr[1] || '').trim());
			//$('[data-view-office]').parent().removeClass('is--open');
			//$(this).parent().addClass('is--open');
			map.setView(
				[lat,  lng]
			);
		});
	}
}
map_2gis();
/*
function map_google_contacts() {  
	var map_container_div_id = 'map-google';
	var cont = $('#' + map_container_div_id);  
	if(cont.length) {    
		var map_data = JSON.parse(cont.attr('data-map') || '{}');
		var coordMapOfficeOne = map_data.center;
		var zoomMapOfficeOne = map_data.zoom;    
		if($(document).width() < 768) {
			var coordMapOfficeOne = map_data.center_xs;
			var zoomMapOfficeOne = map_data.zoom_xs;    
		}
		var styleMapOfficeOne = 
		[
			{
				featureType: "landscape",
				elementType: "labels",
				stylers: [{
					visibility: "off"
				}]
			}, {
				featureType: "transit",
				elementType: "labels",
				stylers: [{
					visibility: "off"
				}]
			}, {
				featureType: "poi",
				elementType: "labels",
				stylers: [{
					visibility: "off"
				}]
			}, {
				featureType: "water",
				elementType: "labels",
				stylers: [{
					visibility: "off"
				}]
			}, {
				featureType: "road",
				elementType: "labels.icon",
				stylers: [{
					visibility: "off"
				}]
			}, {
				stylers: [{
					saturation: -100
				}, {
					lightness: -2
				}]
			}, {
				featureType: "road",
				elementType: "labels.text.fill",
				stylers: [{
					visibility: "on"
				}, {
					lightness: 24
				}]
			}, {
				featureType: "road",
				elementType: "geometry",
				stylers: [{
					lightness: 57
				}]
			}
		],
		optionsMapOfficeOne = {
			zoom: zoomMapOfficeOne, 
			center: new google.maps.LatLng(coordMapOfficeOne[0], coordMapOfficeOne[1]), 
			styles: styleMapOfficeOne
		},
		idOfficeOne = document.getElementById(map_container_div_id),
		mapOfficeOne = new google.maps.Map(idOfficeOne, optionsMapOfficeOne),
		iconOfficeOne = {   
			//path: "M29.0061 0C12.9878 0 -5.73408e-07 12.8421 -5.73408e-07 28.6841C-5.73408e-07 36.7885 7.98612 51.308 7.98612 51.308L27.9369 85L48.7532 51.7014C48.7532 51.7014 58 37.848 58 28.6841C58.0024 12.8421 45.0171 0 29.0061 0ZM28.8703 44.4827C19.6962 44.4827 12.2653 37.0854 12.2653 27.9432C12.2653 18.813 19.6938 11.4205 28.8703 11.4205C38.0395 11.4205 45.4777 18.813 45.4777 27.9432C45.4777 37.0854 38.0395 44.4827 28.8703 44.4827Z", 
			//fillColor: '#00AEF3',
			//strokeColor: '#000000',
			//fillOpacity: 1,
			//anchor: new google.maps.Point(29,85),
			anchor: new google.maps.Point(0,0),
			strokeWeight: 0,
			//scale: 1,
			url: "img/svg/map-marker.svg",
		}; 
		if(map_data.placemarks.length) {
			for(var i = 0; i < map_data.placemarks.length; i++) {
				var iconCoordOfficeOne = {lat: map_data.placemarks[i].coord[0], lng: map_data.placemarks[i].coord[1]}, 
				OfficeOne = new google.maps.Marker({
					position: iconCoordOfficeOne,
					map: mapOfficeOne,
					icon: iconOfficeOne,
					title: map_data.placemarks[i].title,
					  //animation: google.maps.Animation.DROP
				});
			}
		}
	}  
}; 

$(function () {
	$(document.body).on('shown.bs.modal', '.modal', {}, function(event){
		event.preventDefault();
		$(window).trigger('resize');    
	});  
});*/