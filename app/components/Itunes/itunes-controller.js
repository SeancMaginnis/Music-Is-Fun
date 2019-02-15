import ItunesService from "./itunes-service.js";
//Private
const itunesService = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC oncesd songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(itunesService.Songs)
  let template = ''
  itunesService.Songs.forEach(song => {
    template += song.getTemplate()
  })
  document.getElementById("song-list").innerHTML = template
}


//PUBLIC
class ItunesController {
  constructor() {
    itunesService.addSubscriber("songs", drawSongs)
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController