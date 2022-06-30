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
document.getElementById("sign-in").addEventListener("click", myFunction);
const email=document.getElementById("email");
const password=document.getElementById("password");
function myFunction() {
   restaurantDetails.map((item)=>{
    if(item["email"]==email.value && item["password"]==password.value )
    {
        window.location.assign("http://localhost:3000/dashboard")
    }
   })
}