function _register(){
	var name = $("#username").val(),
		psw = $("#password").val(),
		repsw = $("#repassword").val();
	if(name == ""){
		alert("亲 请输入密码！")
	}else{
		if(psw == ""){
			alert("请输入密码");
		}else{
			if(psw == repsw){
				var user = getUser(name,psw);
				registerData(user);
			}else{
				alert("亲 两次输入的密码不一致！")
			}
		}
	}
}
function _login(){
	location.href = "login.html"
}
function getUser(name,psw){
	var user = {
		username : name,
		password : psw
	}
	return user;
}

//存入数据
function registerData(user){
	$.ajax({
		type:"post",
		url:"http://datainfo.duapp.com/shopdata/userinfo.php",
		data:{status:"register",userID:user.username,password:user.password},
		async:true,
		success:function(data){
			if(data == 1){
				alert("注册成功");
			}else if(data == 0){
				alert("用户名存在");
			}else{
				alert("数据库报错")
			}
		}
	});
}
