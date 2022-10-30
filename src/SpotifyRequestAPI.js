import { client_id, client_secret, redirect_uri } from './AuthorizationConfig';

export function SpotifyRequestAPI(type, token) {
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


export function RequestAccessToken(code) {
    var formData = new FormData();
    formData.append('code', code);
    formData.append('redirect_uri', redirect_uri);
    formData.append('grant_type', 'authorization_code');
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.open("POST", `https://api.spotify.com/api/token`);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.setRequestHeader("Authorization", "Basic " + (Buffer(client_id + ':' +
            client_secret).toString('base64')));
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