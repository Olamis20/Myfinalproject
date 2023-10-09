function validateForm(){
    var name = 
document.getElementById("name").value;
 var email = 
document.getElementById("email").value;
 var message = 
document.getElementById('message').value;

 if (name ==="" || email ==="" || message === ""){
    alert("Please fill in all fields");
    return false;
 }
}

































































// const form = 
// document.querySelector('form');
//  form.addEventListener('submit',function(event){
//     event.preventDefault();
//     const phone = 
//     document.getElementById('phone').value;
//     const email = 
//     document.getElementById('email').value;
//     const address = 
//     document.getElementById('address').value;

//     if(phone === "|| email ==="|| address === ""){
//         alert('Please fill in all the required fields.');
//     } else{
//         alert('Success! We will get back to you soon.');
//     }
//  });