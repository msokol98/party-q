const useFormatSong = song => {
    return {
        artist: song.artists && song.artists[0] && song.artists[0].name,
        imageURI: song.album && song.album.images && song.album.images[0] && song.album.images[0].url,
        name: song && song.name
    }
}

export default useFormatSong;