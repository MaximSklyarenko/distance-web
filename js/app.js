"use strict";

(function () {

    // Module
    var app = angular.module('app', []);

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

        $scope.selectedSlide = $scope.slides[9];

        $scope.onClick = function (slide) {
            $scope.selectedSlide = slide;
        }
    }]);


})();
