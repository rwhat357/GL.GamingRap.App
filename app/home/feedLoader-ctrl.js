(function() {
    'use strict';

    var app = angular.module('GamingRapApp');

    app.controller("FeedCtrl", ['FeedService', 'URLsRepo', FeedCtrl]);

    function FeedCtrl(Feed, URLsRepo) { //Feed is a google service

        var vm = this;
        vm.name = "fredy";
        vm.entry;
        vm.feedEntries;
        activate();

        function activate() {

            var URLs = URLsRepo.getAll();
            for(var i = 0; i < URLs.length; i ++ ){
                Feed.parseFeed(URLs[i])
                    .then(function(res) {
                        if(res.data.responseData){
                            vm.entries.push(res.data.responseData.feed.entries[0]);
                        }
                    });
            }
        }
    }


    app.factory('FeedService', ['$http', FeedService]);
    //www.ivivelabs.com/blog/making-a-quick-rss-feed-reader-using-angularjs/#sthash.PvPbSzY6.dpuf
    function FeedService($http) {
        return {
            parseFeed: function(url) {
                return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
            }
        }
    }


    app.service('URLsRepo', [URLsRepo]);

    function URLsRepo() {
        return {
            getAll: getAll
        };

        function getAll() {
            var feedSources = [{
                url: 'http://games.mxdwn.com/feed/                                                '
            }, {
                url: 'http://attackofthefanboy.com/feed/                                          '
            }, {
                url: 'http://feeds.feedburner.com/WiiUDaily                                       '
            }, {
                url: 'http://www.neoseeker.com/feeds/news/                                        '
            }, {
                url: 'http://www.destructoid.com/?mode=atom                                       '
            }, {
                url: 'http://feeds.gawker.com/kotaku/full                                         '
            }, {
                url: 'www.playstationlifestyle.net/feed/                                          '
            }, {
                url: 'http://feeds.feedburner.com/Co-optimus                                      '
            }, {
                url: 'http://www.polygon.com/rss/index.xml                                        '
            }, {
                url: 'http://techcrunch.com/feed/                                                 '
            }, {
                url: 'http://www.engadget.com/rss.xml                                             '
            }, {
                url: 'http://feeds.feedburner.com/makeuseof                                       '
            }, {
                url: 'http://feeds.feedblitz.com/Gizmag                                           '
            }, {
                url: 'http://cdn.pocket-lint.com/rss/all.xml                                      '
            }, {
                url: 'http://feeds.feedburner.com/ubergizmo                                       '
            }, {
                url: 'http://www.knowyourmobile.com/feeds/all                                     '
            }, {
                url: 'http://www.insidemobileapps.com/feed/                                       '
            }, {
                url: 'http://feeds.feedburner.com/coolsmartphone/uJxV                             '
            }, {
                url: 'http://feeds.feedburner.com/GameRant                                        '
            }, {
                url: 'http://gamingbolt.com/feed                                                  '
            }, {
                url: 'http://feeds.feedburner.com/RockPaperShotgun                                '
            }, {
                url: 'http://www.alphabetagamer.com/feed/                                         '
            }, {
                url: 'http://www.gamebreaker.tv/feed/                                             '
            }, {
                url: 'http://www.gamespot.com/feeds/news/                                         '
            }, {
                url: 'http://nerdreactor.com/feed/                                                '
            }, {
                url: 'http://wiiudaily.com/feed/                                                  '
            }, {
                url: 'http://realgamernewz.com/feed/atom                                          '
            }, {
                url: 'http://www.1up.com/rss?x=1                                                  '
            }, {
                url: 'http://feeds.feedburner.com/coolsmartphone/uJxV                             '
            }, {
                url: 'http://feeds.venturebeat.com/VentureBeat                                    '
            }, {
                url: 'http://www.extremetech.com/feed                                            '
            }, {
                url: 'http://www.wired.com/feed/                                                  '
            }, {
                url: 'http://feeds.feedburner.com/TheBoyGeniusReport                              '
            }, {
                url: 'http://www.engadget.com/rss.xml                                             '
            }, {
                url: 'http://techcrunch.com/feed/                                                 '
            }, {
                url: 'http://techcrunch.com/gadgets/feed/                                         '
            }, {
                url: 'http://www.techspot.com/backend.xml                                         '
            }, {
                url: 'http://www.geek.com/feed/                                                   '
            }, {
                url: 'http://feeds.gawker.com/lifehacker/full                                     '
            }, {
                url: 'http://www.i4u.com/i4u.xml                                                  '
            }, {
                url: 'http://feeds.mashable.com/Mashable                                          '
            }, {
                url: 'http://www.theinquirer.net/feeds/rss                                        '
            }, {
                url: 'http://feeds.feedburner.com/typepad/alleyinsider/silicon_alley_insider      '
            }, {
                url: 'http://feeds.feedburner.com/ImgurGallery?format=xml                         '
            }, {
                url: 'http://feeds.feedburner.com/makeuseof                                       '
            }, {
                url: 'http://www.charterworld.com/news/feed                                       '
            }, {
                url: 'http://cdn.pocket-lint.com/rss/all.xml                                      '
            }, {
                url: 'http://robbreport.com/Feeds/RSSPulse.aspx                                   '
            }, {
                url: 'http://www.lookandlearn.com/blog/feed/                                      '
            }, {
                url: 'http://www.celebritybabyscoop.com/feed                                      '
            }, {
                url: 'http://feeds.gawker.com/io9/full                                            '
            }, {
                url: 'http://feeds.feedburner.com/BlessThisStuff                                  '
            }, {
                url: 'http://feeds.feedburner.com/feedburner/theBERRY                             '
            }, {
                url: 'http://www.knowyourmobile.com/feeds/all                                     '
            }, {
                url: 'http://luxpresso.com/xml/section/luxpresso.xml                              '
            }, {
                url: 'http://www.technocrazed.com/feed                                            '
            }, {
                url: 'http://pandodaily.com.feedsportal.com/c/35141/f/650422/index.rss            '
            }, {
                url: 'http://feeds.feedburner.com/ubergizmo                                       '
            }, {
                url: 'http://feeds2.feedburner.com/slashfilm                                      '
            }, {
                url: 'http://hifructose.com/feed/                                                 '
            }, {
                url: 'http://www.dailyfinance.com/rss.xml                                         '
            }, {
                url: 'http://feeds.gawker.com/gawker/full                                         '
            }, {
                url: 'http://feeds.feedburner.com/TheDailyGalaxyNewsFromPlanetEarthBeyond         '
            }, {
                url: 'http://feeds.feedburner.com/WallStCheatSheetCore                            '
            }, {
                url: 'http://feeds.feedburner.com/dornob                                          '
            }, {
                url: 'http://consumerist.com/feed/                                                '
            }, {
                url: 'http://geekologie.com/atom.xml                                              '
            }, {
                url: 'http://www.neoseeker.com/feeds/news/                                        '
            }, {
                url: 'http://feeds.feedburner.com/Co-optimus                                      '
            }, {
                url: 'http://www.destructoid.com//?mode=atom                                      '
            }, {
                url: 'http://www.alphabetagamer.com/feed/                                         '
            }, {
                url: 'http://metro.co.uk/entertainment/gaming/feed/                               '
            }, {
                url: 'http://mp1st.com/feed/                                                      '
            }, {
                url: 'http://segmentnext.com/feed/                                                '
            }, {
                url: 'http://www.stealthybox.com/feed/                                            '
            }, {
                url: 'http://www.tentonhammer.com/rss                                             '
            }, {
                url: 'http://www.cinemablend.com/rss_games.xml                                    '
            }, {
                url: 'http://www.destructoid.com//?mode=atom                                      '
            }, {
                url: 'http://feeds.feedburner.com/GameRant                                        '
            }];

            return feedSources;
        }

    }



})();
