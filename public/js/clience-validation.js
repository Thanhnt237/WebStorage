function handleDeleteProduct(value) {
    $.ajax({
        url: '/' + value,
        type: 'DELETE',
        success: function (result) {
            $(location).attr('href', '/');
        }
    })
}
function handleUpdateProduct(value) {
    $(location).attr('href', '/update-product/' + value);
}
function login_validate(){
    var username = document.getElementByID('username');
    var password = document.getElementByID('password');
    alert(username.value);
    if(username.value === "admin" && password === "admin"){
      return true;
    }
    else{
      alert("EROR");
      return false;
    }
}
