// require('dotenv').config();

// let checkFetch = function(response) {
//   if (!response.ok) {
//     throw Error(response.statusText + ' - ' + response.url);
//   }
//   return response;
// } 

//`https://sandbox-api.brewerydb.com/v2/search/geo/point?lat=${lat}&lng=${lng}`

let myLocation = document.getElementById("my-coordinates")

function getLocation() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(displayPosition)
  } else {
    alert("Sorry, location is not available. Stay sober, friends.")
  }
}

function displayPosition(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  let loc = lat + ", " + lng;

  myLocation.innerHTML = " Latitude: " + lat + ", " + "Longitude: " + lng;
}

function createMap() {  
  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');
  const mapImage = document.querySelector('#map-image');
  
  mapLink.href = '';
  mapLink.textContent = '';
  function success(position) {
    let lat  = position.coords.latitude;
    let lng = position.coords.longitude;
      status.textContent = '';
      mapImage.innerHTML =`
      <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=${lng}%2C${lat}%2C${lng}%2C${lat}&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=18/${lat}/${lng}">View Larger Map</a></small>
      `
      mapLink.innerHTML = `Latitude: ${lat} °, Longitude: ${lng} °`;
      getBeer(position, lat, lng);
  }
  function error() {
      status.innerHTML = 'Unable to retrieve your location';
  }
  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }
}


document.querySelector('#find-user').addEventListener('click', getBeer);

// createMap();

function getBeer(position, lat, lng){
  console.log(lat + ", " + lng);
    fetch(`https://sandbox-api.brewerydb.com/v2/search/geo/point?lat=${lat}&lng=${lng}&key=d2bcebda18ee4340157eff0fc2192936`, {'mode': 'no-cors'})
    //.then(checkFetch)
    // console.log("id is working")
    //.then((result) => result.json())
    .then((info) => {
      console.log(lat + lng)
      let output = `<h2>Results: ${info.totalResults}</h2>`;
      console.log(info.data);
    });
  }
        // look at last line of code in dashboard.js -- calls button for getting location
      // let output = `<h2>Beer Near Me!</h2>`
      // data.results.forEach((function(user) {
        // output += ``
      // }))

    
//     })
//     // .catch(function(err){
//     //     console.log('Error');
//     //     console.log(err);
//     // })
// };
// getBeer();


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
// }