const form = document.getElementById('form'); 
const username = document.getElementById('username');
const email = document.getElementById('email'); 
const password = document.getElementById('password'); 
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener("submit", function(e){
    e.preventDefault(); 
    checkForm(); 
    inserirBlur();
})



function inserirBlur(){
    email.addEventListener('blur', ()=>{
        checkInputEmail(); 
    })
    username.addEventListener('blur', ()=>{
        checkInputUsername(); 
    })
    password.addEventListener('blur', ()=>{
        checkInputPassword(); 
    })
    passwordConfirmation.addEventListener('blur', ()=>{
        checkInputPasswordConfirmation(); 
    })
}






function checkInputUsername(){
    const usernameValue = username.value; 
    const itemmessage = document.getElementById('error')
    
    if(usernameValue === ""){
        errorInput(username,itemmessage);
    }else{
        itemmessage.classList.add('hidden');
        username.classList.remove('errorinput');
    }
}

function checkInputEmail(){
    const emailValue = email.value; 
    const itemmessage = document.getElementById('error2');

    if(emailValue ===""){
        errorInput(email,itemmessage);
    }else{
        itemmessage.classList.add('hidden');
        email.classList.remove('errorinput');
    }
}


function checkInputPassword(){
    const passwordValue = password.value; 
    const itemmessage = document.getElementById('error3');

    if(passwordValue ===""){
        errorInput(password,itemmessage);
    }else if(passwordValue.length<8){
        errorInput(password,itemmessage);
        document.querySelector('#error3').innerHTML = "A senha precisa ter no minimo 8 caracteres. "
    }else{
        itemmessage.classList.add('hidden');
        password.classList.remove('errorinput');
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value; 
    const confirmationPasswordValue = passwordConfirmation.value; 
    const itemmessage = document.getElementById('error4'); 

    if(confirmationPasswordValue ===""){
        errorInput(passwordConfirmation,itemmessage);
    }else if(confirmationPasswordValue !== passwordValue){
        errorInput(passwordConfirmation, itemmessage)
        itemmessage.innerHTML ="As senhas não são iguais."
    }else{
        itemmessage.classList.add('hidden'); 
        passwordConfirmation.classList.remove('errorinput'); 
    }
}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const itemmessage = form.querySelectorAll('.errorinput');

    const isValid = [...itemmessage].every((item)=>{
        return item.className === "errorinput"
    }); 
    if(isValid){
        alert('Cadastrado com sucesso!!!')
    }
}

function errorInput(item,itemmessage){
    

    itemmessage.classList.remove('hidden');
    itemmessage.classList.add('erromessage');
    item.classList.add('errorinput');

}