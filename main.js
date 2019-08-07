// require('dotenv').config();

let checkFetch = function(response) {
    if (!response.ok) {
        throw Error(response.statusText + ' - ' + response.url);
    }
    return response;
}

function getLocation() {
    var x = document.getElementById("container");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude; 
}


function getBeer(){
    fetch('https://sandbox-api.brewerydb.com/v2/search/geo/point/?key=d2bcebda18ee4340157eff0fc2192936', {'mode': 'no-cors'})
    .then(checkFetch)
    .then((result) => result.json())
    .then((data) => {

        document.getElementById('container').innerHTML = output
    })
    .catch(function(err){
        console.log('Error');
        console.log(err);
    })
};