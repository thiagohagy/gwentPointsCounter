var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable")
var frameModule = require("ui/frame");
var config = require("../../shared/config");
var page;

var Audio = require("nativescript-audio");
var AudioPlayer = new Audio.TNSPlayer();
var ambientSound;
var playing = 1;

var pageData = new observableModule.fromObject({
  factions: config.factions,
  player1: 0, // posição da faction
  player2: 0, // posição da faction
  numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  player1Points:[0,0,0,0],
  player2Points:[0,0,0,0],
  faction1:"",
  faction2:"",
  playerImage: "~/images/pause.png"
});

exports.loaded = function(args) {
    page = args.object;
    page.actionBarHidden = true;
    page.bindingContext = pageData;

    if (page.navigationContext){
      pageData.player1 = page.navigationContext.faction1 || 0;
      pageData.player2 = page.navigationContext.faction2 || 0;

      pageData.faction1 = config.factions[pageData.player1];
      pageData.faction2 = config.factions[pageData.player2];
      
    } 

    var playerOptions = {
      audioFile: '~/sounds/ost.mp3',
      loop: true
    }
    AudioPlayer.playFromUrl(playerOptions);
    
};

exports.resetPoints = function(){
  pageData.player1Points = [0,0,0,0];
  pageData.player2Points = [0,0,0,0];
} 

exports.playStop = function(){
  if (playing) {
    AudioPlayer.pause();
    playing = 0;
    pageData.playerImage =  "~/images/play.png"
  } else {
    AudioPlayer.play();
    playing = 1;
    pageData.playerImage =  "~/images/pause.png"
  }
}


// exports.share = function() {
//   var list = [];
//   for (var i = 0, size = groceryList.length; i < size; i++) {
//     list.push(groceryList.getItem(i).name);
//   }
//   var listString = list.join(", ").trim();
//   socialShare.shareText(listString);
// };
