

function togglerBtn() {
    var toggle = document.getElementById("icon");
    if (toggle.style.transform === "rotate(180deg)") {
        toggle.style.transform = "rotate(0deg)";
    } else {
        toggle.style.transform = "rotate(180deg)";
    }
    console.log(toggle)
    toggle.style.transition = ".5s";
}

function togglerBtn2() {
    var toggle = document.getElementById("icon2");
    if (toggle.style.transform === "rotate(180deg)") {
        toggle.style.transform = "rotate(0deg)";
    } else {
        toggle.style.transform = "rotate(180deg)";
    }
    toggle.style.transition = ".3s";
}
var user = [
    {
      name: "Trung",
      userName: "admin",
      passWord: "123",
    },
  ];
  
  var userName = document.getElementById("userName");
  var passWord = document.getElementById("passWord");
  var notify = document.getElementById("thongbao");
  
  function login() {
    if(localStorage.getItem("LIST_USER") == null){
      localStorage.setItem("LIST_USER", JSON.stringify(users));
    }
    users = JSON.parse(localStorage.getItem("LIST_USER"));
    for (var i = 0; i < users.length; i++) {
      if (
        users[i].passWord == passWord.value &&
        users[i].userName == userName.value
      ) {
        localStorage.setItem("user", JSON.stringify(users[i]));
        location.replace("./index.html");
        return;
      }
    }
    notify.innerHTML = "Tai khoan hoac mat khau sai";
  }
  
  function register() {
    if(localStorage.getItem("LIST_USER") == null){
      localStorage.setItem("LIST_USER", JSON.stringify(user));
    }
  
    var nameSignUp = document.getElementById("user-sign-up");
    var userNameSignUp = document.getElementById("userName-sign-up");
    var passSignUp = document.getElementById("pass-sign-up");
    var notification = document.getElementById("notify");
    
    var check = false;
  
    
    if(nameSignUp.value == "" || userNameSignUp.value == "" || passSignUp.value == ""){
        notification.innerHTML = "Hay nhap day du thong tin";
        return;
    }
    users = JSON.parse(localStorage.getItem("LIST_USER"));
    users.forEach((Element) => {
      if (userNameSignUp.value == Element.userName) {
          check = true;
      }
    });
    if(check)
    {
      notification.innerHTML = "Tai khoan da ton tai";
    }
    else
      {
          users.push({
          name: nameSignUp.value,
          userName: userNameSignUp.value,
          passWord: passSignUp.value,
          });
          localStorage.setItem("LIST_USER", JSON.stringify(users));
          notification.innerHTML = "Dang ki thanh cong";
          location.replace("./form.html");
      }
  }


  var data = JSON.parse(localStorage.getItem('user'));
  var tenKH = document.getElementById('tenUser');
  tenKH.innerHTML = data.name;
function testAccount() {
  var account = document.getElementById("thongBao");
  if (account.style.display === "none") {
    account.style.display = "block";
  } else {
    account.style.display = "none";
  }
}

function logout(){
  localStorage.removeItem("user");
  location.replace("./index.html");
}