export default class Song {
  constructor(song) {
    this.title = song.trackName
    //Change 250x250 if you want a larger image
    this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
    this.artist = song.artistName
    this.collection = song.collectionName
    this.price = song.collectionPrice
    this.preview = song.previewUrl
  }
  getTemplate() {
    return `
    <div class="card col-3 bg2">
  <img class="card-img-top" src="${this.albumArt}" >
  <div class="card-body">
    <h4 class="card-title">"${this.title}"</h4>
    <h5 class="card-text">"${this.artist}"</h5>
    <h6 class="card-text">"${this.collection}"</h6>
    <h7 class="card-text">"${this.price}"</h7>
    <audio controls class="w-100" src="${this.preview}">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
  </div>
</div>
    </div>`
  }
}

