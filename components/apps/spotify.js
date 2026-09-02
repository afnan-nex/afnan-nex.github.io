import React from 'react'

export default function Spotify() {
    return (
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZEVXbKj23U1GF4IR" frameBorder="0" title="Spotify" className="h-full w-full bg-ub-cool-grey" referrerPolicy="no-referrer"></iframe>
    )
}

export const displaySpotify = () => {
    <Spotify> </Spotify>
}
