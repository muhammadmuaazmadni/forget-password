function signup() {
    axios({
        method: 'post',
        url: 'http://localhost:5000/signup',
        data: {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            phone: document.getElementById('phone').value,
            gender: document.getElementById('gender').value,
        },
        withCredentials: true
    }).then((response) => {
        if (response.data.status === 200) {
            alert(response.data.message)
            location.href = "./login.html"
        } else {
            alert(response.data.message);
        }
    }).catch((error) => {
        console.log(error);
    });
    return false
}

function login() {
    axios({
        method: 'post',
        url: 'http://localhost:5000/login',
        data: {
            email: document.getElementById('lemail').value,
            password: document.getElementById('lpassword').value,
        },
        withCredentials: true
    }).then((response) => {
        if(response.data.status === 200){
            alert(response.data.message)
            location.href = "./profile.html"
        }
        else{
            alert(response.data.message)
        }
    }, (error) => {
        console.log(error);
    });
    return false
}

function getProfile() {
    axios({
        method: 'get',
        url: 'http://localhost:5000/profile',
        credentials: 'include',
    }).then((response) => {
        console.log(response);
        document.getElementById('pName').innerHTML = response.data.profile.name
        document.getElementById('pPhone').innerHTML = response.data.profile.phone
        document.getElementById('pEmail').innerHTML = response.data.profile.email
    }, (error) => {
        console.log(error.message);
        location.href = "./login.html"
    });
    return false
}
function forgetPassword() {
    let email = document.getElementById('fEmail').value;
    localStorage.setItem('email', email)
    axios({
        method: 'post',
        url: 'http://localhost:5000/forget-password',
        data: {
            email: email,
        },
        withCredentials: true
    }).then((response) => {
        if(response.data.status === 200){
            alert(response.data.message)
            location.href = "./forget2.html"      
        }
        else{
            alert(response.data.message)
        }
    }, (error) => {
        console.log(error);
    });
    return false
}
function forgetPassword2() {
    let getEmail = localStorage.getItem('email')
    axios({
        method: 'post',
        url: 'http://localhost:5000/forget-password-2',
        data: {
            email: getEmail,
            newPassword: document.getElementById('newPassword').value,
            otp: document.getElementById('otp').value,
        },
        withCredentials: true
    }).then((response) => {
        console.log(response);
        alert(response.data)
        location.href = "./login.html"
    }, (error) => {
        console.log(error);
    });
    return false
}
function logout() {
    axios({
        method: 'post',
        url: 'http://localhost:5000/logout',
    }).then((response) => {
        console.log(response);
        location.href = "./login.html"
    }, (error) => {
        console.log(error);
    });
    return false
}