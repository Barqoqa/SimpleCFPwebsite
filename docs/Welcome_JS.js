function login() {

    let Email, Password, Email_input, Psw_input;

    Email = "User1@gmail.com";
    Password = "User1p";
    Email_input = document.getElementById("email0").value;
    Psw_input = document.getElementById("psw0").value;

    if (Email_input == Email && Password == Psw_input) {
        open("../Home/Home_HTML.html");
        close()
        
    }

    else {

        document.getElementById('Erorr-e').style.display = "block";
        document.getElementById('Erorr-p').style.display = "block";
    }
    
    
}




