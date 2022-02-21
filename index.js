var latSearch
var lonSearch
var button = document.getElementById("btn");

button.addEventListener("click", initMap);

function initMap() {
  latSearch = Number(document.getElementById("lat-search").value);
  lonSearch = Number(document.getElementById("lon-search").value);

  document.getElementById('lat').innerText = latSearch;
  document.getElementById('lon').innerText = lonSearch;

  // The location of Uluru
  const uluru = { lat: latSearch, lng: lonSearch };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}