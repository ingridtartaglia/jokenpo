var jokenpo = angular.module('jokenpo', []);

jokenpo.controller('jokenpoCtrl', function($scope){
    $scope.yourHands = "imgs/your-hand.png";
    $scope.pcHands = "imgs/pc-hand.png";

    $scope.options = {
        rock: "imgs/your-hand.png",
        paper: "imgs/your-paper.png",
        scissors: "imgs/your-scissors.png"
    };

    $scope.pcChoice = [
        "imgs/pc-hand.png",
        "imgs/pc-paper.png",
        "imgs/pc-scissors.png"
    ];

    /////

    $scope.clickRock = function(){
        $scope.yourHands = $scope.options.rock;
        $scope.pcHands = $scope.pcChoice[Math.floor(Math.random()*$scope.pcChoice.length)];
        $scope.result();
    };
    $scope.clickPaper = function(){
        $scope.yourHands = $scope.options.paper;
        $scope.pcHands = $scope.pcChoice[Math.floor(Math.random()*$scope.pcChoice.length)];
        $scope.result();
    };
    $scope.clickScissors = function(){
        $scope.yourHands = $scope.options.scissors;
        $scope.pcHands = $scope.pcChoice[Math.floor(Math.random()*$scope.pcChoice.length)];
        $scope.result();
    };

    $scope.result = function(){
        if (($scope.yourHands == $scope.options.rock) && ($scope.pcHands == $scope.pcChoice[0])) {
            $scope.message = "Tie!";
        }
        if (($scope.yourHands == $scope.options.paper) && ($scope.pcHands == $scope.pcChoice[1])) {
            $scope.message = "Tie!";
        }
        if (($scope.yourHands == $scope.options.scissors) && ($scope.pcHands == $scope.pcChoice[2])) {
            $scope.message = "Tie!";
        }
        if (($scope.yourHands == $scope.options.rock) && ($scope.pcHands == $scope.pcChoice[1])) {
            $scope.message = "You lose!"
        }
        if (($scope.yourHands == $scope.options.rock) && ($scope.pcHands == $scope.pcChoice[2])) {
            $scope.message = "You win!"
        }
        if (($scope.yourHands == $scope.options.paper) && ($scope.pcHands == $scope.pcChoice[0])) {
            $scope.message = "You win!"
        }
        if (($scope.yourHands == $scope.options.paper) && ($scope.pcHands == $scope.pcChoice[2])) {
            $scope.message = "You lose!"
        }
        if (($scope.yourHands == $scope.options.scissors) && ($scope.pcHands == $scope.pcChoice[0])) {
            $scope.message = "You lose!"
        }
        if (($scope.yourHands == $scope.options.scissors) && ($scope.pcHands == $scope.pcChoice[1])) {
            $scope.message = "You win!"
        }
    }



});
