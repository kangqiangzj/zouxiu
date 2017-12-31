$(document).ready(function(){
	var data = localStorage.getItem("userInfo");
	if(data && data != ""){
		$("#username").val(JSON.parse(data).userID);
		$("#password").val(JSON.parse(data).psw);
	}
});
function _login(){
	var name = $("#username").val(),
		psw = $("#password").val();
	if(name == ""){
		alert("请输入用户名");
	}else{
		if(psw == ""){
			alert("请输入密码")
		}else{			
			var user = getUser(name,psw);
			loginUser(user)
		}
	}
}
//
function getUser(name,psw){
	var user = {
		username:name,
		password:psw
	}
	return user;
}
function loginUser(user){
	var check = $("#remember").attr("checked")
	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/userinfo.php",
		data:{status:"login",userID:user.username,password:user.password},
		async:true,
		success:function(data){
			console.log(data);
			if(data == 0){
				alert("用户名不存在！")
			}else{
				if(data == 2){
					alert("密码不正确")
				}else if(data.charAt(0) === "{"){
					alert("登录成功");
					location.href = "/zouxiu/html/index.html";
					if(check){
						var data = new Object;
						data.userID = user.username;
						data.psw = user.password;
						var str = JSON.stringify(data);
						localStorage.setItem("userInfo",str);
					}	
				}
			} 
		}
	});
}
//去注册
function _register(){
	location.href = "/zouxiu/html/register.html"
}

