const btn = document.getElementById('button');

btn.addEventListener('click', saveMe);

function saveMe(e){
e.preventDefault();
const price=document.getElementById('price').value;
const dish = document.getElementById('dish').value;
const table = document.getElementById('table').value;

const order = {
price,
dish,
table
}
console.log(order);


axios.post("http://localhost:3000/user/add-order", order)
.then(res=>{
    showOrder(res.data.newOrders);
})
.catch(err=>{
    err
})


}

window.addEventListener('DOMContentLoaded', ()=>{
    console.log("Checking for Window Refreshing"); 
axios.get("http://localhost:3000/user/get-orders").then(res=>{
    for(let i =0; i<res.data.AllOrders.length; i++){
        showOrder(res.data.AllOrders[i]);
    }
}).catch(err=>{
console.log(err, "Check error");
})
})



function showOrder(order){
    // Declaring the values of Options Tables
    const tb1 = document.getElementById('tb1').value;
    const tb2 = document.getElementById('tb2').value;
    const tb3 = document.getElementById('tb3').value;
 
    // Declaring the values of Order Tables
    const orderTable1 = document.getElementById('t1');
    const orderTable2 = document.getElementById('t2');
    const orderTable3 = document.getElementById('t3');

    // Creating and initializing the values of li and printing the Result
let li = document.createElement('li');
li.textContent =order.price+" "+order.dish +" "+order.table;

// Creating a Delete button;
let deletebtn = document.createElement('input');
deletebtn.type = ('button');
deletebtn.value = ('delete');
li.appendChild(deletebtn);

if(order.table == tb1){
orderTable1.appendChild(li);
}
if(order.table == tb2){
    orderTable2.appendChild(li);
    }
    if(order.table == tb3){
        orderTable3.appendChild(li);
        }

}