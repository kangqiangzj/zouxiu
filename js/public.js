$("footer").on("touchend","li",function(){
	var index = $(this).index()
	if(index == 0){
		window.location.href = "index.html";
	}else if(index == 1){
		window.location.href = "type.html";
	}else if(index == 2){
		window.location.href = "cart.html";
	}else if(index == 3){
		window.location.href = "myshow.html"
	}else if(index == 4){
		window.location.href = "more.html";
	}
})

$(".back").on("touchend",function(){
	window.history.back()
})