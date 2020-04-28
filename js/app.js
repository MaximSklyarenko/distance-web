"use strict";

(function () {

    // Module
    var app = angular.module('app', [])
        .directive('slideHandler', ['$document', function() {
            return {
                link: function(scope, element, attr) {
                    element.on('itemshown', function(event) {
                        scope.$emit('selectSlide', element.attr('index'));
                    });
                }
            };
        }]);


    // Controllers
    app.controller('Slideshow', ['$scope', function ($scope) {
        $scope.slides = [
            'pics/slides/infograph1.jpg',
            'pics/slides/infograph2.jpg',
            'pics/slides/infograph3.jpg',
            'pics/slides/infograph4.jpg',
            'pics/slides/infograph5.jpg',
            'pics/slides/infograph6.jpg',
            'pics/slides/infograph7.jpg',
            'pics/slides/infograph8.jpg',
            'pics/slides/infograph9.jpg'
        ];

        $scope.slideshow1 = UIkit.slideshow('#slideshow1', { ratio: '1280:914'});
        $scope.slideModal = UIkit.modal('#slide-modal');
        $scope.selectedSlide = $scope.slides[0];
        $scope.showSlide = false;

        $scope.$on('selectSlide', function(event, args) {
            $scope.selectedSlide = $scope.slides[args];
            $scope.$apply();
        });

        $scope.onClick = function (slide, index) {
            $scope.selectedSlide = slide;
            $scope.showSlide = true;
            $scope.slideModal.show();
            $scope.slideshow1.show(index);
        };

        $scope.onSlideClick = function () {
            $scope.showSlide = false;
            $scope.slideModal.hide();
        }

    }]);	

})();
