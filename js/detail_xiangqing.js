function getQueryString(name){//一般放在公共js中
	var req = new RegExp("(^|&)"+name+"=([^&]*)(&|$)")
	var r = window.location.search.substr(1).match(req)
	if(r!=null){
		return decodeURI(r[2])
	}
	return null
}
var goodsID = getQueryString("goodsID")
function _jieshao(){
	window.location.href = "detail_jieshao.html?goodsID="+goodsID
}
function _shipai(){
	window.location.href = "detail_shipai.html?goodsID="+goodsID
}