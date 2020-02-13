function removeCard(e){
        
		 $('#modalConfirmYesNo').appendTo("body").modal('show');
		 var testObj = e.parentNode;
		 
		 while(testObj.className == "card-new") {
			 
			 testObj = testObj.parentNode;
			 
		 }

		 testObj.remove();
}


function openPost(n){
	
	 var heading = document.getElementsByClassName('card-body-heading-content')[n].innerText;
	
	var author = document.getElementsByClassName('side-square-wrapper-content')[n].innerText;

	 var url = "../html/post.html?heading=" + encodeURIComponent(heading) + "&author=" + encodeURIComponent(author);
     window.location.href = url;
	
}


