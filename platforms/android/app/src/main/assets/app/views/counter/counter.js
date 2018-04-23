var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable")
var frameModule = require("ui/frame");
var config = require("../../shared/config");
var page;

var pageData = new observableModule.fromObject({
  factions: config.factions,
  player1: 0, // posição da faction
  player2: 0, // posição da faction
  numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  player1Points:[0,0,0,0],
  player2Points:[0,0,0,0],
  faction1:"",
  faction2:"",
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
};

exports.resetPoints = function(){
  console.log('teste');
  pageData.player1Points = [0,0,0,0];
  pageData.player2Points = [0,0,0,0];
} 



// exports.share = function() {
//   var list = [];
//   for (var i = 0, size = groceryList.length; i < size; i++) {
//     list.push(groceryList.getItem(i).name);
//   }
//   var listString = list.join(", ").trim();
//   socialShare.shareText(listString);
// };
