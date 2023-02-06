let nameUser = document.createElement('div');
let emailUser = document.createElement('div');
let passwordUser = document.createElement('div');

const contents = document.querySelector('.inputDiv')

nameUser.innerHTML = "В це поле введи придумане ім'я <p>Наприклад:<h2>'Ірландець1277'</h2></p>"
nameUser.style.background = 'yellow'
nameUser.className = 'nameUser common';

emailUser.innerHTML = 'В це поле введи свій Email'
emailUser.style.background = 'red'
emailUser.className = 'emailUser common'

passwordUser.innerHTML = 'Сюди введи свій пароль'
passwordUser.style.background = 'green'
passwordUser.className = 'passwordUser common'


contents.append(nameUser)
contents.append(emailUser)
contents.append(passwordUser)
