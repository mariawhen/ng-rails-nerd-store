(function(){
  angular.module('nerdStore')
    .controller('mainController', mainController)

  function mainController() {
    var vm = this;
    vm.message = "IT WOLKS REARRY WELL!";

    vm.stickers = [
      {
        title: "JavaScript Bracket Design",
        img_url: "javascript.png"
      },
      {
        title: "Ruby Gem For That",
        img_url: "squareGemForThat.png"
      },
      {
        title: "JavaScript Bracket Design",
        img_url: "javascript.png"
      },
      {
        title: "Ruby Gem For That",
        img_url: "squareGemForThat.png"
      },
      {
        title: "JavaScript Bracket Design",
        img_url: "javascript.png"
      },
      {
        title: "NPM Package For That",
        img_url: "pkgforthat.png"
      },
      {
        title: "JavaScript Bracket Design",
        img_url: "javascript.png"
      },
      {
        title: "NPM Package For That",
        img_url: "pkgforthat.png"
      }
    ];
  }

})();
