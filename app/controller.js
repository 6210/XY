/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 *
 */
;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController);

  MainController.$inject = ['LocalStorage', 'QueryService'];


  function MainController(LocalStorage, QueryService) {

    // 'controller as' syntax
    var self = this;


    ////////////  function definitions

    console.log('01 - Define ScrollSpy');
    angular.module('boilerplate', ['duScroll']).
      controller('MainController', function($scope, $document){
        $scope.toTheTop = function() {
          $document.scrollTopAnimated(0, 5000).then(function() {
            console && console.log('You just scrolled to the top!');
          });
        }
        console.log('Can I get here?');
        var section3 = angular.element(document.getElementById('section-3'));
        $scope.toSection3 = function() {
          $document.scrollToElementAnimated(section3);
        }
      }
    ).value('duScrollOffset', 30);
    /**
     * Load some data
     * @return {Object} Returned object
     */
    // QueryService.query('GET', 'posts', {}, {})
    //   .then(function(ovocie) {
    //     self.ovocie = ovocie.data;
    //   });
  }


})();
