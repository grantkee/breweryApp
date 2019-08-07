// require('dotenv').config();

let checkFetch = function(response) {
    if (!response.ok) {
        throw Error(response.statusText + ' - ' + response.url);
    }
    return response;
}


const lat = position.coords.latitude;
const lon = position.coords.longitude;



// status.textContent = `Latitude: ${lat}, Longitude: ${lon}`;

// /search/geo/point?lat=35.772096&lng=-78.638614

const locationURL = () => {
    
}

function getBeer(){
    fetch('https://sandbox-api.brewerydb.com/v2/search/geo/point/?key=d2bcebda18ee4340157eff0fc2192936', {'mode': 'no-cors'})
    .then(checkFetch)
    console.log("id is working")
    .then((result) => result.json())
    .then((data) => {



    
    })
    .catch(function(err){
        console.log('Error');
        console.log(err);
    })
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