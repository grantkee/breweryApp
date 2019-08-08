// require('dotenv').config();

let checkFetch = function(response) {
    if (!response.ok) {
        throw Error(response.statusText + ' - ' + response.url);
    }
    return response;
} 

// /search/geo/point?lat=35.772096&lng=-78.638614

var myLocation = document.getElementById("my-coordinates")

function getLocation() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(displayPosition)
    } else {
     myLocation.innerHTML = "Not available"
    }
}

function displayPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    myLocation.innerHTML = " Latitude: " + lat + ", " + "Longitude: " + lng;
}

function createMap() {
    let loc = lat + ", " + lng;
    var map = new ol.Map({
        target: document.querySelector('map'),
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([loc]),
          zoom: 4
        })
      });
    
    // ! NEXT TWO LINES DEPEND ON GOOGLE MAPS API WORKING !
    // let map = new google.maps.Map(document.getElementById(#map), {zoom: 4, center: loc});
    // let homeMarker = new google.maps.Marker({position: loc, map: map})
}

// createMap();

function getBeer(){
    fetch('https://sandbox-api.brewerydb.com/v2/?key=d2bcebda18ee4340157eff0fc2192936', {'mode': 'no-cors'})
    .then(checkFetch)
    // console.log("id is working")
    .then((result) => result.json())
    .then((data) => {
        // look at last line of code in dashboard.js -- calls button for getting location


    
    })
    // .catch(function(err){
    //     console.log('Error');
    //     console.log(err);
    // })
};
getBeer();


// function getAPI(){
//     fetch('https://sandbox-api.brewerydb.com/v2/search/geo/point/?key=d2bcebda18ee4340157eff0fc2192936')
//     .then(checkFetch)
//     .then((result) => result.json())
//     .then((data) => {
//         let output = `<h2>Friends</h2>`
//         data.results.forEach((function(user){
//             output += `
//             <img src = "${user.picture.medium}" alt = "faces">
//                 <ul>
//                     <li>${user.name.first} ${user.name.last}</li>
//                     <li>${user.location.city}, ${user.location.state}</li>
//                     <li>${user.email}</li>
//                 </ul>
//             `
//         }))
//         document.getElementById('container').innerHTML = output
//     })
//     .catch(function(err){
//         console.log('Error');
//         console.log(err);
//     })
// };