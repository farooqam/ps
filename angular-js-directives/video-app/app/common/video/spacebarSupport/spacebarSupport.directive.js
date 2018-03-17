(function () {
    'use strict';
  
    angular.module('rootModule')
        .directive('spacebarSupport', ['$log', function($log) {
            return {
                restrict: 'A',
                link: function($scope, $element, $attrs) {
                    
                    $('body').on('keypress', function(e) {
                        
                        var video = $element[0];

                        if(video.localName.toLowerCase() !== 'video') {
                            throw('This directive can only be used within an HTML video element.');
                        }
                        
                        if(e.keyCode === 32) {
                            if(video.paused) {
                                video.play();
                            }
                            else {
                                video.pause();
                            }
                        }
                    });

                    angular.extend($scope, {
                        videos: [
                            { src: 'http://media.w3.org/2010/05/sintel/trailer.mp4', type: 'video/mp4'},
                            { src: 'http://media.w3.org/2010/05/sintel/trailer.webm5', type: 'video/webm'},
                            { src: 'http://media.w3.org/2010/05/sintel/trailer.ogv', type: 'video/ogg'}                            
                        ]
                    });
                }
            }
        }]);
  })();
  