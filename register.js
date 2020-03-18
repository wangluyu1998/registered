$(function(){
    var name = $(".form_input_username"),
        phone = $(".form_input_phone"),
        pwd = $(".form_input_password"),
        vcode = $(".form_input_verifyCode"),
        btn = $(".form_button_submit"),
        namemsg = $("#username-msg"),
        phonemsg = $("#phone-msg"),
        pwdmsg = $("#password-msg"),
        codemsg = $("#vcode-msg");
        btncode = $(".form_button_getCode");
        btntext = $(".count");

        function vName(){
            if(name.val() != ""){
                if(/^(?!(\d+)$)[\u4e00-\u9fff\w]+$/.test(name.val())){
                    namemsg.html("");
                    return true;
                }else{
                    namemsg.html("用户名仅支持中英文、数字和下划线且不能为纯数字");
                    return false;
                }
            }else{
                namemsg.html("用户名不能为空！");
                return false;
            }
        }

        function vPhone(){
            if(phone.val() !== ""){
                let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
                if(reg.test(phone.val())){
                    phonemsg.html("");
                    return true;
                }else{
                    phonemsg.html("手机号码格式不正确");
                    return false;
                }
            }else{
                phonemsg.html("手机号不能为空！");
                return false;
            }
        }

        function vPwd(){
            let reg = /^(?![^a-zA-Z]+$)(?!\\D+$).{8,16}$/;
            if(pwd.val() !== ""){
                if(reg.test(pwd.val())){
                    pwdmsg.html("");
                    return true;
                }else{
                    pwdmsg.html("密码格式不正确");
                    return false;
                }
            }else{
                pwdmsg.html("密码不能为空！");
                return false;
            }
        }

        btncode.click(function(){
            let number = 30;
            btncode.hide();
            btntext.show();
            codemsg.html("");
            var setTime = setInterval(function(){
                if(number<=0){
                    clearInterval(setTime);
                    btntext.hide();
                    btncode.show();
                    codemsg.html("请求超时，请稍后重试");
                }else{
                    number--;
                    btntext.text(number+"秒后重新获取");
                    btntext.attr("disabled",true);
                }
            },1000)
        })

        function vCode(){
            if(vcode.val() !== ""){
                return true;
            }else{
                codemsg.html("验证码不能为空！");
                return false;
            }
        }

        btn.click(function(){
            return vName() && vPhone() && vPwd() && vCode();
        });
        name.focusout(function(){
            vName() ? "" : name.select();
        });
        phone.focusout(function(){
            vPhone() ? "" : phone.select();
        })
        pwd.focusout(function(){
            vPwd() ? "" : pwd.select();
        })
        vcode.focusout(function(){
            vCode() ? "" : vcode.select();
        })
});