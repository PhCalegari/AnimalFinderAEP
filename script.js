function initMap() 
    const center = { lat: -25.4148608, lng: -49.3453312 };
    const zoom = 12;
  
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: zoom,
      center: center,
    });
  document.addEventListener('DOMContentLoaded', () => {
    initMap();
  });
  