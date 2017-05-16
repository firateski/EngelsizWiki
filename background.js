var rootUrl = "https://ipfs.io/ipns/QmVH1VzGBydSfmNG7rmdDjAeBZ71UVeEahVbNpFQtwZK8W";
var query = "";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
       query = details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1];
       if(!query || query == '/'){
         query = "/wiki/Anasayfa";
       }
       return {
         redirectUrl: rootUrl + query + ".html"
       };
    },
    {
        urls: [
            "*://tr.wikipedia.org/*"
        ]
    },
    ["blocking"]
);
