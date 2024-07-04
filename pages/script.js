document.addEventListener("DOMContentLoaded", function() {
   const submitButton = document.getElementById('submit');

   submitButton.addEventListener('click', function(event) {
       event.preventDefault(); 

       let isValid = true;

      
       document.querySelectorAll('.error').forEach(error => {
           error.textContent = '';
       });

      
       const name = document.getElementById('name').value.trim();
       if (name === '') {
           document.getElementById('nameError').textContent = 'Name is required.';
           isValid = false;
       }

       
       const message = document.getElementById('message').value.trim();
       if (message.length < 5) {
           document.getElementById('messageError').textContent = 'Message must be at least 5 characters long.';
           isValid = false;
       }

      
       const phone = document.getElementById('phone').value.trim();
       const phonePattern = /^\+380\d{9}$/;
       if (!phonePattern.test(phone)) {
           document.getElementById('phoneError').textContent = 'Phone number must start with +380 and contain 9 digits.';
           isValid = false;
       }

     
       const email = document.getElementById('email').value.trim();
       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailPattern.test(email)) {
           document.getElementById('emailError').textContent = 'Email must contain @ and a domain.';
           isValid = false;
       }

       if (isValid) {
           console.log({
               name: name,
               message: message,
               phone: phone,
               email: email
           });

          
           document.querySelector('.result').textContent = `Name: ${name}, Message: ${message}, Phone: ${phone}, Email: ${email}`;
       }
   });
});
