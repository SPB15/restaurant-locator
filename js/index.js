var locations = []

$.getJSON('https://crossorigin.me/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.640,-117.844&rankby=distance&types=food&key=AIzaSyDxXA4Pw4SSLK5JVPBnYLBNzgTQucxXICI',function(data) {
            
        for(var i = 0; i<data.results.length;i++)
        {
            console.log(data.results[i].name);
            console.log(data.results[i].geometry.location.lat);
            console.log(data.results[i].geometry.location.lng);
            locations.push({name: data.results[i].name,
                            lat: data.results[i].geometry.location.lat,
                            lng: data.results[i].geometry.location.lng
                           });
        }
for(var i = 0; i<4;i++)
        {
    console.log('THE FUCKING DATA : ', locations[i].name, ' -- ', locations[i].lat, ' -- ', locations[i].lng, ' -- ' );
    
        }
});