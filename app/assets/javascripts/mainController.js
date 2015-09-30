(function(){
  angular.module('nerdStore')
    .controller('mainController', mainController)

  function mainController() {
    var vm = this;

    vm.stickers = [
      {
        title: "NPM Package For That",
        img_url: "pkgforthatStick.png"
      },
      {
        title: "Terminal Live Here Design",
        img_url: "liveHere.png"
      },
      {
        title: "Terminal It's Dark Design",
        img_url: "itsDark.png"
      },
      {
        title: "JavaScript Bracket Design",
        img_url: "javascript.png"
      },
      {
        title: "Terminal Live Here Tee",
        img_url: "livehereT.jpg"
      },
      {
        title: "JavaScript Fractal Tee",
        img_url: "crazyhexT.jpg"
      },
      {
        title: "JavaScript Fractal Design",
        img_url: "jsFractalSticker.png"
      },
      {
        title: "Ruby Gem For That",
        img_url: "squareGemForThat.jpg"
      }
    ];
  }

})();
