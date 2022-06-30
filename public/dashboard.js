const myOrders=[];

const drop=document.getElementById("drop");
const pickup = document.getElementById("pickup");
const phone= document.getElementById("phone");
const vehicle=document.getElementById("vehicle");
const good=document.getElementById("good");
const myTableBody=document.getElementById("myTableBody");
document.getElementById("submit-1").addEventListener("click",myFunction1);
function myFunction1(){
  alert("Form Submitted Successfully");
}
document.getElementById("submit").addEventListener("click",myFunction);
function myFunction() {
    alert("Submitted");
    myOrders.push({
        "drop":drop.value,
        "pickup":pickup.value,
        "phone":phone.value,
        "vehicle":vehicle.value,
         "good":good.value
    })

    console.table(myOrders)
    renderTable()
 }

 function renderTable(){
    rows=[]
    let i=1;
    myOrders.map((item)=>{
        rows.push(`<tr>
        <th scope="row">${i++}</th>
        <th scope="row">${item["drop"]}</th>
        <td scope="row">${item["pickup"]}</td>
        <td scope="row">${item["phone"]}</td>
        <td scope="row">${item["vehicle"]}</td>
        <td scope="row">${item["good"]}</td>
      </tr>`)
    })
    myTableBody.innerHTML=rows
    drop.value="";
 pickup.value="";
 phone.value="";
 vehicle.value="";
 good.value="";
 }
