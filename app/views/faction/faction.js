var socialShare = require("nativescript-social-share");
var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var frameModule = require("ui/frame");
var config = require("../../shared/config");
var page;

var pageData = new observableModule.fromObject({
  factions: config.factions,
  player1: 0, // posição da faction
  player2: 0 // posição da faction
});

exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = pageData;
};

exports.nextFaction = function(args) {

    if (args.object.id == 'faction1') {
        pageData.player1 +=1
        if(pageData.player1 > pageData.factions.length-1) pageData.player1 = 0;
        var image = pageData.factions[pageData.player1];
        page.getViewById("faction1").backgroundImage = image;
    } else {
        pageData.player2 +=1
        if(pageData.player2 > pageData.factions.length-1) pageData.player2 = 0;
        var image = pageData.factions[pageData.player2];
        page.getViewById("faction2").backgroundImage = image;
    }
};

exports.letsPlay = function(){    
    var topmost = frameModule.topmost();
    const navigationEntry = { moduleName: "views/counter/counter", context: { faction1: pageData.player1, faction2: pageData.player2 }, animated: true };
    topmost.navigate(navigationEntry);   
}
