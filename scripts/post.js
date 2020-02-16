
var queryString = new Array();

function onEdit(){

    document.getElementById('post').focus();

};




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
    document.getElementById('comments').style.visibility = 'hidden';

};

var cnt=0;
function countLikes(){

 cnt=parseInt(cnt)+parseInt(1);
 var divData=document.getElementById("showCount");
 var likeButton = document.getElementById("likeButton");
 likeButton.innerHTML = "Liked";
 if(cnt==1) 
 divData.innerHTML= cnt +" person likes this !";//this part has been edited
 else
 divData.innerHTML= cnt +" people like this !";

}

var comments = [];
function addComment(comment){
    document.getElementById('comments').style.visibility = 'visible';
    var comment = comment.value;
    comments.unshift(comment);
    $("#comment").val('');
    console.log(comments);
    this.comments.forEach(addingComment);
}

function addingComment(item, index){
    var temp = document.getElementById("comments").innerHTML;
    document.getElementById("comments").innerHTML = '<div class="comment">'+item+'</div>' + '</br>';
    document.getElementById("comments").innerHTML += temp + '</br>';
    comments.pop();
}

