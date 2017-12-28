/**
 * @desc: Angular JS Code
 */

(function(){

    const MESSAGES = {
        success: 'Enjoy!',
        error:  'Too much!'
    };

    var app = angular.module('LunchCheck', [])
                    .controller('LunchCheckController', ['$scope', function($scope){
                        var lc = this;
                        lc.init = function(){
                            $scope.error = lc.error = "";
                            $scope.lunch = lc.lunch = "";
                        }

                        lc.checkLunch = function(){
                            debugger;
                            /*** Check for empty input ***/
                            if(lc.lunch === ''){
                                lc.error = "Please enter data first";
                                /*** Only used to color the font: For bonus point. Can be ignored if not needed ***/
                                document.querySelector('.errorStatus').classList.remove('green');
                                document.querySelector('.errorStatus').classList.add('red');
                                return;
                            }
                            /*** Check for 3 or more ***/
                            var lunchArr = lc.lunch.split(',');
                            var count = 0;
                            lunchArr.forEach((lunchObj) => {
                                lunchObj = lunchObj.trim();
                                /*** Do not consider empty record towards count ***/
                                if(lunchObj !== ''){
                                    count++;
                                }
                            });
                            if(count > 3){
                                lc.error = MESSAGES.error;
                            }
                            else{
                                lc.error = MESSAGES.success;
                            }
                            /*** Only used to color the font: For bonus point. Can be ignored if not needed ***/
                            document.querySelector('.errorStatus').classList.remove('red');
                            document.querySelector('.errorStatus').classList.add('green');
                        }
                    }]);
})();