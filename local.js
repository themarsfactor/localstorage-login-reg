

function store(){

    let mail = document.getElementById('mail').value;
    let pw = document.getElementById('pw').value;
    

        let person = {
            "mail" : mail,
            "password" : pw
        }


        let getUser = getUserDetails();

        getUser.push(person);

        getUser = JSON.stringify(getUser);
        localStorage.setItem("users", getUser);
        alert("Registration Successful");

        location.reload();
    }



    function getUserDetails(){

        let storedUser = localStorage.getItem("users");
        if (storedUser == null || storedUser == undefined) {
                return [];

        }else{
            storedUser = JSON.parse(storedUser);
            return storedUser;

        }
    }











function check(){

    let getUserAll = localStorage.getItem('users');
    getUserAll = JSON.parse(getUserAll);

    const usersFound = []
    for (i = 0; i < getUserAll.length; i++){

        let storedEmail = getUserAll[i].mail;
         let storedPw = getUserAll[i].password;

    

    let userEmail = document.getElementById('userEmail');
    let userPass = document.getElementById('userPass');
    if(userEmail.value == storedEmail && userPass.value == storedPw){
        //alert('login successfully');

        //location.href = "user.html";
        usersFound.push({
            userEmail: storedEmail,
            userPass: storedPw
        })
        break;
    }

}
    if(usersFound.length > 0){
        alert("login Successful");
        location.href="user.html"
    }else{
        alert("You have not registered")
    }

}