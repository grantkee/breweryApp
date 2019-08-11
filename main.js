// require('dotenv').config();

// let checkFetch = function(response) {
//   if (!response.ok) {
//     throw Error(response.statusText + ' - ' + response.url);
//   }
//   return response;
// } 

// `https://sandbox-api.brewerydb.com/v2/search/geo/point?lat=${lat}&lng=${lng}`



function createMap() {
  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');
  const mapImage = document.querySelector('#map-image');
  mapLink.href = '';
  mapLink.textContent = '';
  function success(position) {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      status.textContent = '';
      mapImage.innerHTML =`
      <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=${lng}%2C${lat}%2C${lng}%2C${lat}&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=18/${lat}/${lng}">View Larger Map</a></small>
      `
      mapLink.innerHTML = `Latitude: ${lat} °, Longitude: ${lng} °`;
      getBeer(position);
  }
  function error() {
      status.innerHTML = 'Unable to retrieve your location';
  }
  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating...';
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
document.querySelector('#find-user').addEventListener('click', createMap);
// document.querySelector('#find-user').addEventListener('onload', getBeer);

// console.log(lat + ", " + lng)


function getBeer(position){
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  console.log(lat + ", " + lng);
  fetch(`https://sandbox-api.brewerydb.com/v2/search/geo/point?lat=${lat}&lng=${lng}&totalResults&key=d2bcebda18ee4340157eff0fc2192936`)
    // .then(checkFetch)
    // console.log("id is working")
    // .then((result) => result.json())
    .then((data) => {
      // let output = `<h2>Results: ${totalResults}</h2>`;
      console.log(data);

    
    })
    // .catch(function(err){
    //     console.log('Error');
    //     console.log(err);
    // })
};













// function getAPI(){
//     fetch(`https://sandbox-api.brewerydb.com/v2/search/geo/point?lat=${lat}&lng=${lng}&key=d2bcebda18ee4340157eff0fc2192936`)
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

// let myLocation = document.getElementById("my-coordinates")

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(displayPosition)
//   } else {
//     alert("Sorry, location is not available. Stay sober, friends.")
//   }

//   // getBeer();
// }

// function displayPosition(position) {
//   const status = document.querySelector('#status');
//   const mapLink = document.querySelector('#map-link');
//   const mapImage = document.querySelector('#map-image');
//   const lat = position.coords.latitude;
//   const lng = position.coords.longitude;
//   let loc = lat + ", " + lng;
//   mapLink.href = '';
//   mapLink.textContent = '';

//   myLocation.innerHTML = "Latitude: " + lat + ", " + "Longitude: " + lng;

//   mapImage.innerHTML =`
//     <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=${lng}%2C${lat}%2C${lng}%2C${lat}&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=18/${lat}/${lng}">View Larger Map</a></small>
//     `
//     // mapLink.innerHTML = `Latitude: ${lat}°, Longitude: ${lng}°`;

//   document.querySelector('#find-user').addEventListener('click', getGeo);
// }

// function createMap() {
//   let map = document.getElementById('map'),
//   target: document.querySelector('map'),
//   layers: [
//     new ol.layer.Tile({
//       source: new ol.source.OSM()
//     })
//   ],
//   view: new ol.View({
//     center: ol.proj.fromLonLat([lat, lng]),
//     zoom: 4
//   })
// };
    
  




//   var map = new ol.Map({
//     target: document.querySelector('map'),
//     layers: [
//       new ol.layer.Tile({
//         source: new ol.source.OSM()
//       })
//     ],
//     view: new ol.View({
//       center: ol.proj.fromLonLat([lat, lng]),
//       zoom: 4
//     })
//   });
// }

// createMap();