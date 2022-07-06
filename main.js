var songs = ["Beach Day","Future Tense", "March to Sleep", "Now And Then", "Turn Back", "Gameover", 
"lazer cutter", "Guitar Practice V30", "Ganja Groove", "Off The Rails", "Nightrun", "Searching" ];
var numSongs = 12;
var musicIndex = 0;

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

const shuffler = document.getElementById("buttonShuffle");

shuffler.onclick = shuffleSong;

function  shuffleSong() {
    shuffle(songs);
    var music = document.getElementById("audioShuffle");
    musicIndex = 0;
    console.log("I was clicked");
    music.src = './music/' + songs[musicIndex % (numSongs + 1)].replace(/\s/g, "") + '.mp3' ;
    music.load();
    music.play(); 
    
    nameShuffle.innerHTML= songs[musicIndex % (numSongs + 1)];
    photoShuffle.src= ( './images/' + songs[musicIndex % (numSongs + 1)].replace(/\s/g, "") + '.PNG') ;
} 

const music = document.getElementById("audioShuffle");
const nameShuffle = document.getElementById("songNameShuffle");
const photoShuffle = document.getElementById("photoShuffle");



music.addEventListener("ended", function(){
    console.log(musicIndex);
    console.log(songs[musicIndex % (numSongs + 1)]);

    musicIndex += 1;

    music.src = './music/' + songs[musicIndex % (numSongs + 1)].replace(/\s/g, "") + '.mp3' ;
    music.load();
    music.play(); 
    
    nameShuffle.innerHTML= songs[musicIndex % (numSongs + 1)];
    photoShuffle.src= ( './images/' + songs[musicIndex % (numSongs + 1)].replace(/\s/g, "") + '.PNG') ;
})

