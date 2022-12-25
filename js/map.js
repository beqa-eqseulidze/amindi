let delay;
sessionStorage.getItem('lat')? delay=0:delay=1000;
setTimeout(function(){
    let lat=sessionStorage.getItem("lat");
    let lon=sessionStorage.getItem("lon");   
    
    let map = L.map('map').setView([lat, lon],8);
    
     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    let marker = L.marker([lat,lon]).addTo(map);

},delay)