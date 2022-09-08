function SpotifyRequestAPI(type, token) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.open("GET", `https://api.spotify.com/v1/me/top/${type}?limit=10`);
        request.setRequestHeader("Authorization", "Bearer " + token);
        request.send();
        request.onload = () => {
            if (request.status === 200) {
                resolve(JSON.parse(request.response));
            } else {
                console.log("error");
            }
        }
    })
}

export default SpotifyRequestAPI;