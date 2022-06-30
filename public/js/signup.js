const restaurantDetails=[
    {"resName":"admin",
     "ownerName":"admin",
     "email":"owner@admin.com",
     "password":"1234",
     },
    {
     "resName":"yatin",
     "ownerName":"nagpal",
     "email":"yatinnagpal2016@gmail.com",
     "password":"1234",
    }
]
document.getElementById("register").addEventListener("click", myFunction);
const restaurantName = document.getElementById("restaurantName");
const ownerName = document.getElementById("ownerName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
function myFunction() {
    restaurantDetails.map((item)=>{
     if(confirmPassword.value == password.value )
     {
        window.location.assign("http://localhost:3000/dashboard")
     }
    })
 }