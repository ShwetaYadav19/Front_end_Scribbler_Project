
var queryString = new Array();

window.onload = function () {
    if (queryString.length == 0) {
        if (window.location.search.split('?').length > 1) {
            var params = window.location.search.split('?')[1].split('&');
            for (var i = 0; i < params.length; i++) {
                var key = params[i].split('=')[0];
                var value = decodeURIComponent(params[i].split('=')[1]);
                queryString[key] = value;
            }
        }
    }
    if (queryString["heading"] != null && queryString["author"] != null) {
        var heading = queryString["heading"] ;
        var author  =  queryString["author"];
        document.getElementsByClassName("heading-content")[0].innerHTML = heading;
        document.getElementsByClassName("author-name")[0].innerHTML = author;
    }


};