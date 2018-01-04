function getQueryString(name){//一般放在公共js中
	var req = new RegExp("(^|&)"+name+"=([^&]*)(&|$)")
	var r = window.location.search.substr(1).match(req)
	if(r!=null){
		return decodeURI(r[2])
	}
	return null
}
var goodsID = getQueryString("goodsID")
function _xiangqing(){
	window.location.href = "detail_xiangqing.html?goodsID="+goodsID
}
function _jieshao(){
	window.location.href = "detail_jieshao.html?goodsID="+goodsID
}

$(function(){
	var goodsID = getQueryString("goodsID")
	console.log(goodsID)
	loadSwiper();
	getDetailData(goodsID)
})

function loadSwiper(){
	var swiper = new Swiper(".swiper-container",{
		autoplay:1000,
		loop:true
	})
}

function getDetailData(goodsID){
	$.ajax({
		type:"get",
//		dataType:"jsonp",
//		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		url:"/zouxiu/mock/prods.json",
//		data:{goodsID:goodsID},
		async:true,
		success:function(data){
			console.log(data)
			
			var $wrapper = $("#wrapper")
			$.each(data, function() {
//				console.log(this.goodsID);
				if(this.goodsID == goodsID){
					var $slide = $("<div class='swiper-slide'></div>");
					var imgbox = $("<img src='"+this.goodsListImg+"' width='100%' />")
					$slide.append(imgbox);
					$wrapper.append($slide);
					return;
				}		
			});
			loadSwiper();
			/*<div class="swiper-slide">
					<img src="http://temp.im/640x320/ffccaa/fff" width="100%" />
			</div>*/			
//			var thisdata = eval(data[0].goodsBenUrl)//伪数组转换成数组？？？
//			var $wrapper = $("#wrapper")
//			$.each(thisdata,function(index){
//				var $slide = $("<div class='swiper-slide'></div>");
//				var imgbox = $("<img src='"+thisdata[index]+"' width='100%' />")
//				$slide.append(imgbox);
//				$wrapper.append($slide);
//			});
//			loadSwiper();
		}
	});
}
