chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var newUrl = "http://wikipedia.org"; //Varsayılan değer

        var domainIndex = details.url.toLowerCase().indexOf("wikipedia");

        if(domainIndex !== -1){
            var beforeGoKeyword = details.url.substr(0, domainIndex);
            var goKeyword = "go";
            var afterGoKeyword = details.url.substr(domainIndex, details.url.length - domainIndex);

            newUrl = beforeGoKeyword + goKeyword + afterGoKeyword; //gowikipedia domainine çevrilmiş yeni URL.
        }

       return {
         redirectUrl: newUrl
       };
    },
    {
        urls: [
            "*://*.wikipedia.org/*"
        ]
    },
    ["blocking"]
);
