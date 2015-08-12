(function() {
    'use strict';

    var app = angular.module('GamingRapApp')
        .controller('HomeCtrl', HomeCtrl);

    function HomeCtrl(feedListSvc) { //Feed is a google service

        var vm = this;
        vm.boardFeedStatus = {};
        vm.FEEDS = {};

        vm.retrieve = retrieve;


        // testing

        // end testings

        //////////////////////

        function initBoardContainer() {
            vm.boardFeedStatus.list = [];
            vm.boardFeedStatus.totalCount = 0;
            vm.boardFeedStatus.totalPages = 0;
            vm.boardFeedStatus.currentPage = 0;
            vm.boardFeedStatus.pageSize = 20;
            vm.boardFeedStatus.retrieving = false;
        }

        function retrieve(){

            if ( _.isEmpty(vm.boardFeedStatus) ){
                initBoardContainer();
            }

            vm.retrieveStatus = true;
            console.log('retrieve() called');
            feedListSvc.get(vm.boardFeedStatus)
                .then(function(data){
                    console.log('returned retrieving all feeds');
                    // vm.feeds.push.apply(vm.feeds, data);
                    //vm.retrieveStatus = false;
                    // _.each(data, function(value) {
                    //     //  //Embed Parsing + Lookup
                    //     var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
                    //     var urlRegex = new RegExp(expression);

                    //     var images = value.content.match(urlRegex);
                    //     if (images){
                    //        value.sampleImage = images[0];
                    //     }

                    //     value.sampleImage = $(value.content).find('img').eq(0).attr('src');
                    //     if (!value.sampleImage) {
                    //         value.sampleImage = $(value.content).find('iframe').eq(0).attr('src');
                    //     } else {
                    //         console.log('Couldn\'t find a picture or a youtube video for this feed entry');
                    //     }
                    // });
                }, function(){
                    console.log("Error: couldn't fetch RSS feed.");
                });

        }
    }

    app.factory('feedListSvc', function($rootScope, $q, FeedLoader, URLsRepo) {

        var service = {
            get : get
        };

        return service;

        ////////////////////////

        function get(boardFeedStatus) {
            var deferred = $q.defer();
            var feedSources = URLsRepo.getAll();
            var feedSourcesCount = feedSources.length;
            var retrivedCount = 0;
            boardFeedStatus.retrieving  = true;
            for (var i = 0; i < feedSources.length; i++) {
                FeedLoader.fetch({
                    q: feedSources[i].url,
                    num: 1
                }, {}, function(data) {
                    if (data.responseData.feed) {
                        var feed = data.responseData.feed;
                        boardFeedStatus.list.push(feed.entries[0]);
                        retrivedCount++;
                        if (retrivedCount >= feedSourcesCount){
                            deferred.resolve(boardFeedStatus);
                            boardFeedStatus.retrieving  = false;
                        }
                    } else {
                        console.log('Did not have any feed entries: ' + feedSources[i].url);
                    }
                });

            }

            return deferred.promise;
        }
    });


    app.factory('FeedLoader', function($resource) {
        return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
            fetch: {
                method: 'JSONP',
                params: {
                    v: '1.0',
                    callback: 'JSON_CALLBACK'
                }
            }
        });
    });


    app.factory('URLsRepo', [URLsRepo]);

    function URLsRepo() {

        var service  = {
            getAll : getAll
        };

        return service;

        ////////////////////////

        function getAll() {
            var feedSources = [{
                title: 'kotaku',
                url: 'http://feeds.feedburner.com/TechCrunch/gaming'
            }, {
                title: 'neoseaker',
                url: 'http://www.neoseeker.com/feeds/news/?type=rss0.91'
            }, {
                title: 'ps4daily',
                url: 'http://ps4daily.com/feed/'
            }, {
                title: 'gamingbolt',
                url: 'http://gamingbolt.com/feed'
            }, {
                title: 'gamespot',
                url: 'http://www.gamespot.com/feeds/video/'
            }, {
                title: 'giantbomb',
                url: 'http://www.giantbomb.com/feeds/mashup/'
            }, {
                title: 'rockpapershotgun',
                url: 'http://feeds.feedburner.com/RockPaperShotgun'
            }, {
                title: 'attackerofthefanboy',
                url: 'http://attackofthefanboy.com/feed/'
            }, {
                title: 'alphabetagamer',
                url: 'http://www.alphabetagamer.com/feed/'
            }, {
                title: ' destructoid',
                url: ' http://www.destructoid.com//?mode=atom'
            }, {
                title: 'robertsspaceindustries ',
                url: ' https://robertsspaceindustries.com/comm-link/rss'
            }, {
                title: 'artstation ',
                url: ' https://www.artstation.com/artwork.rss'
            }, {
                title: 'tentonhammer ',
                url: 'http://www.tentonhammer.com/rss '
            }, {
                title: ' theonion',
                url: ' http://feeds.theonion.com/Gameological '
            }, {
                title: ' nag',
                url: ' http://www.nag.co.za/feed/'
            }, {
                title: ' nonfictiongaming',
                url: ' http://www.nonfictiongaming.com/feed/  '
            }, {
                title: 'nerdreactor ',
                url: 'http://nerdreactor.com/feed/ '
            }, {
                title: ' thisisxbox',
                url: 'http://www.thisisxbox.com/feed '
            }, {
                title: ' gameinformer',
                url: 'http://www.gameinformer.com/feeds/topfiverss.aspx?p=home '
            }, {
                title: ' GamasutraFeatureArticles',
                url: ' http://feeds.feedburner.com/GamasutraFeatureArticles'
            }, {
                title: 'eurogamer ',
                url: 'http://www.eurogamer.net/?format=rss '
            }, {
                title: ' GameRant',
                url: ' http://feeds.feedburner.com/GameRant'
            }, {
                title: ' ps4daily',
                url: 'http://ps4daily.com/feed '
            }, {
                title: ' gawker',
                url: ' http://feeds.gawker.com/kotaku/full'
            }, {
                title: ' WiiUDaily',
                url: ' http://feeds.feedburner.com/WiiUDaily'
            }, {
                title: ' gamezebo',
                url: ' http://www.gamezebo.com/rss'
            }, {
                title: ' Co-optimus',
                url: 'http://feeds.feedburner.com/Co-optimus '
            }, {
                title: ' gametrailers',
                url: ' http://www.gametrailers.com/videos-trailers/feed'
            }, {
                title: ' stealthybox',
                url: ' http://www.stealthybox.com/feed'
            }, {
                title: ' theverge',
                url: ' http://www.theverge.com/gaming/rss/index.xml'
            }, {
                title: ' gamespot',
                url: 'http://www.gamespot.com/feeds/video/ '
            }, {
                title: ' WeGotThisCoveredGaming',
                url: ' http://feeds.feedburner.com/WeGotThisCoveredGaming'
            }, {
                title: ' polygon',
                url: ' http://www.polygon.com/rss/index.xml'
            }

            ];

            return feedSources;
        }
    }

})();
