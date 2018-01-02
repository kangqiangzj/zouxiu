
var myIscroll;
$(function(){
	loadScroll();
	getData(1);
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

function loadScroll(){
	myIscroll = new IScroll("#wrapper",{
		mouseWheel:true,
		scrollbars:true
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
//			console.log(data)
//			console.log(classID)
			var prods = template("prods",{prods:data});
			var $products = $("#scrollbar .products");
			$products.append(prods);
			myIscroll.refresh();//
//			$.each(data,function(index){
//				$(".products").on("touchstart",".left",function(index){
////				$(".left").on("touchstart",function(){
//					return function(){
//						window.location.href = "detail.html?goodsID="+data[index].goodsID
//					}					
//				})
//			})	
		}
	});
}
