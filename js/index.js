var myIscroll;
$(function(){
	loadScroll();
	getData(1);
	loadSwiper()
	document.addEventListener("touchend",function(){
    	//下拉刷新
    	if(myIscroll.y>0){
    		$(".products").empty()
    		getData(1)
    	}
    	//上拉加载
    	if(myIscroll.y<myIscroll.maxScrollY-50){
    		var page = $("#page").val()
    		var index = parseInt(page)+1
    		getData(index)
    	}
    	
    })
	$(".products").on("touchstart",".left",function(){	
		var goodsID = $(this).find("#goodsID").val()
		window.location.href = "detail_shipai.html?goodsID="+goodsID
	});
});
//function _fenlei(){
//	window.location.href = "type.html";
//}
//function _cart(){
//	window.location.href = "cart.html";
//}
//function _myshow(){
//	window.location.href = "myshow.html";
//}
//function _more(){
//	window.location.href = "more.html";
//}
function loadScroll(){
	myIscroll = new IScroll("#wrapper",{
		mouseWheel:true,
		scrollbars:true
	})
}
function loadSwiper(){
	var swiper = new Swiper(".swiper-container",{
		autoplay:1000,
		loop:true,
		pagination:".swiper-pagination"
	})
}
function getData(classID){
	$.ajax({
		type:"get",
		dataType:"jsonp",
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",	
		async:true,
		data:{classID:classID},
		success:function(data){
			$("#page").val(classID);
			var prods = template("prods",{prods:data});
			var $products = $("#scrollbar .products");
			$products.append(prods);
			myIscroll.refresh();
		}
	});
}
