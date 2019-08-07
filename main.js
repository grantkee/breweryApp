require('dotenv').config();

let checkFetch = function(response) {
    if (!response.ok) {
        throw Error(response.statusText + ' - ' + response.url);
    }
    return response;
}


function getAPI(){
    fetch('https://sandbox-api.brewerydb.com/v2/')
    .then(checkFetch)
    .then((result) => result.json())
    .then((data) => {
        let output = `<h2>Friends</h2>`
        data.results.forEach((function(user){
            output += `
            <img src = "${user.picture.medium}" alt = "faces">
                <ul>
                    <li>${user.name.first} ${user.name.last}</li>
                    <li>${user.location.city}, ${user.location.state}</li>
                    <li>${user.email}</li>
                </ul>
            `
        }))
        document.getElementById('container').innerHTML = output
    })
    .catch(function(err){
        console.log('Error');
        console.log(err);
    })
};