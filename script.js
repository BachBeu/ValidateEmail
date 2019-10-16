str = prompt("Nhập vào Email của bạn: ");
function validateEmail(str) {
    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]* @[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if(regexp.test(str)){
        alert("Email " + str + " Nhập vào hợp lệ");
    }else{
        alert("Email " + str + " Nhập vào không hợp lệ");
    }
} validateEmail(str);