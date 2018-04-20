var GroceryListViewModel = require("./../../shared/view-models/grocery-list-view-model")
var socialShare = require("nativescript-social-share");
var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var swipeDelete = require("../../shared/utils/ios-swipe-delete");
var page;

var groceryList = new GroceryListViewModel([]);
var pageData = new observableModule.fromObject({
    groceryList:groceryList,
    grocery:""

})

exports.loaded = function(args){
    page = args.object;

    if (page.ios) {
        var listView = page.getViewById("groceryList");
        swipeDelete.enable(listView, function(index){
            groceryList.delete(index);
        })
    }

    page.bindingContext = pageData;
    var listView = page.getViewById("groceryList");

    groceryList.empty();
    pageData.set("isLoading", false);
    groceryList.load().then(function(){
        pageData.set('isLoading', false);
        listView.animate({
            opacity:1,
            duration: 1000
        })
    });

}

exports.add = function() {
    if (pageData.get("grocery").trim() === "") {
      dialogsModule.alert({
        message: "Enter a grocery",
        okButtonText: "Ok"
      });
      return;
    } 

    page.getViewById("grocery").dismissSoftInput();
    groceryList.add(pageData.get("grocery"))
        .catch(function(){
            dialogsModule.alert({
                message:"An erros has ocurred",
                okButtonText:"Ok"
            });
        });

    pageData.set("grocery","");
}

exports.share = function() {
  var list = [];
  for (var i = 0, size = groceryList.length; i < size; i++) {
    list.push(groceryList.getItem(i).name);
  }
  var listString = list.join(", ").trim();
  socialShare.shareText(listString);
};

exports.delete = function(args) {
    var item = args.view.bindingContext;
    var index = groceryList.indexOf(item);
    groceryList.delete(index);
}