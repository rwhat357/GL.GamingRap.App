(function() {
    'use strict';

    var app = angular.module('GamingRapApp');

    app.controller('HomeCtrl', ['FeedList', HomeCtrl]);

    function HomeCtrl(FeedList) { //Feed is a google service

        var vm = this;
        vm.name = 'fredy';
        vm.feeds = {};

        FeedList.get().then(function(data) {
            vm.feeds = data;
            angular.forEach(data[0].entries, function(value) {


                //  //Embed Parsing + Lookup
/*                 var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
                 var urlRegex = new RegExp(expression);

                 var images = value.content.match(urlRegex);
                 if (images){
                    value.sampleImage = images[0];
                }*/

                value.sampleImage = $(value.content).find('img').eq(0).attr('src');
                if (!value.sampleImage) {
                    value.sampleImage = $(value.content).find('iframe').eq(0).attr('src');
                } else {
                    console.log('Couldn\'t find a picture or a youtube video for this feed entry');
                }
            });
        });
    }

    app.service('FeedList', function($rootScope, $q, FeedLoader, URLsRepo) {
        var feeds = []; // Global
        this.get = function() {
            var deffered = $q.defer();
            var feedSources = URLsRepo.getAll();
            if (feeds.length === 0) {
                for (var i = 0; i < feedSources.length; i++) {
                    FeedLoader.fetch({
                        q: feedSources[i].url,
                        num: 2
                    }, {}, function(data) {
                        if (data.responseData.feed) {
                            var feed = data.responseData.feed;
                            feeds.push(feed);
                            deffered.resolve(feeds);
                        } else {
                            console.log('Did not have any feeds: ' + feedSources[i].url);
                        }
                    });

                }
            }

            return deffered.promise;
        };
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


    app.service('URLsRepo', [URLsRepo]);

    function URLsRepo() {

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

        return {
            getAll: getAll
        };

    }



})();
