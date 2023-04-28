
var map = L.map('map').setView([5.349122267, -75.114], 22);
        mapLink = 
            '<a href="http://www.esri.com/">Esri</a>';
        wholink = 
            'i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
        L.tileLayer(
            'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '&copy; '+mapLink+', '+wholink,
            maxZoom: 18,
            }).addTo(map)

 var marker = L.marker([5.34813267, -75.1144], {
    title: "LOTE 1",
    alt: "Un marcador clickeable",
    draggable: false,
}).addTo(map);

'Añadir un marker interactivo para la creación de lotes --> editar, crear, desactivar los lotes. Tabla con lotes default'

marker.bindTooltip("LOTE 1", { direction: 'top' }).openTooltip();

marker.on('click', function(e) {
    // Redirige a la página index2.html
    window.location.href = "index2.html";
});

var marker2 = L.marker([5.3476, -75.115434], {
    title: "LOTE 2",
    alt: "Un marcador clickeable",
    draggable: false,
}).addTo(map);

marker2.bindTooltip("LOTE 2", { direction: 'top' }).openTooltip();

marker2.on('click', function(e) {
    // Redirige a la página index3.html
    window.location.href = "index3.html";
});

var marker3 = L.marker([5.3491322267, -75.1154], {
    title: "LOTE 3",
    alt: "Un marcador clickeable",
    draggable: false,
}).addTo(map);

marker3.bindTooltip("LOTE 3", { direction: 'top' }).openTooltip();

marker3.on('click', function(e) {
    // Redirige a la página index4.html
    window.location.href = "index4.html";
});

  