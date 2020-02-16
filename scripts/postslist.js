function removeCard(card){
	
	var delCard = document.getElementById(card);
	
	delCard.parentNode.removeChild(delCard);
	
}

function openPost(author,heading){
    var url = "../html/post.html?heading=" + encodeURIComponent(heading.innerText) + "&author=" + encodeURIComponent(author.innerText);
     window.location.href = url; 
	
}


