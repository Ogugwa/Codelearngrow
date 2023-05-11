// DISPLAY THE RESULT IN A TEMPLATE LITERAL TO WELCOME HIM OR HER TO THE COUNTRY
const button = document.getElementById('btn')

button.addEventListener('click', (e)=>{
e.preventDefault()

const firstname = document.getElementById('firstname').value
const lastname = document.getElementById('lastname').value
const country = document.getElementById('country').value

const value = 'Hello'  + ' ' + firstname + ' ' + lastname + ' ' + 'welcome to' +' '+ country

//const value = `Hello ${firstname} ${lastname} 'welcome to' ${country}'

console.log(value) 
})