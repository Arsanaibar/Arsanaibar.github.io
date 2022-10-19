document.getElementById('form').addEventListener('submit',(event)=>
{
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    event.preventDefault()

    let usernamenya = "arsan"
    let passwordnya = "arsan"

        if (usernamenya == username && passwordnya == password){
            alert('selamat datang')
            window.location.href = "index.html"

        } else {
            alert('username atau password anda salah!')

        }
    

})


