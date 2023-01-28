import fetch from 'isomorphic-unfetch';

let {
    SPOTIFY_CLIENT_ID: client_id,
    SPOTIFY_CLIENT_SECRET: client_secret,
    SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env

async function getAccessToken() {
    if (!refresh_token) throw new Error('No refresh token provided')
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64')
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token
        })
    })

    const data = await response.json()
    return data.access_token
}

export async function getNowPlaying() {
    let access_token = await getAccessToken()

    return fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    })
}