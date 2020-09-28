const email = document.getElementById('email')
const username = document.getElementById('username')
const password = document.getElementById('password')
const country = document.getElementById('country')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
var radio1 = document.getElementById('Male').checked;
var radio2 = document.getElementById('Female').checked;
var radio3 = document.getElementById('agreement').checked;


form.addEventListener('registerbtn', (e) => {
  let messages = []
  if(username.value === '') {
    setErrorFor(username, 'Username cannot be blank');
  }
  if (email.value === '' || email.value == null) {
    messages.push('email is required')
  }

 if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if (country.value === '' || country.value == null) {
    messages.push('country is required')
  }

  if((radio1==""&&(radio2==""))
  {
    alert("select either male of female");
  }
  if((radio3=="")
  {
    alert("select agreement to user terms");
  }

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})