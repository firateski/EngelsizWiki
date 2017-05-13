var url = "https://ipfs.io/ipns/QmVH1VzGBydSfmNG7rmdDjAeBZ71UVeEahVbNpFQtwZK8W";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {
           redirectUrl: url + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1] + ".html"
         };
    },
    {
        urls: [
            "*://tr.wikipedia.org/*"
        ]
    },
    ["blocking"]
);
