let cnt = 0;
console.log("connected");
function bike() {
const BMW = {
name: "BMW Sports Edition",
brand: "BMW",
price: "1200000",
color: "Black",
weight: "Heavy",
type: "SuperBike",
year: "2022",
 };
display(BMW)
}
function car() {
const Maclaren = {
Model_name: "Maclaren GT Coupe",
brand: "Maclaren",
Fuel_Type: "Petrol",
Max_Power: " 612 bhp @7500 rpm",
Max_Torque: "630 Nm @ 5500 rpm",
Mileage: "7 kmpl",
price: "3.72 Crores",
color: "organge",
weight: "1466",
Type: "SuperCar",
year: "2019",
 };
display(Maclaren)
}
function phone() {
const Iphone = {
    Model_name: "Iphone 14 Pro Max",
    brand: "Apple",
    OS: "iOS 16, upgradable to iOS 16.2",
    RAM: "8 GB",
    Price: "169,900",
    weight: "240 grams",
    Storage_Capacity: "512 GB",
    color: "Purple"
     };
    display(Iphone)
    }
    function display(info) {
    if (cnt != 0) {
    document.getElementById("tab").innerHTML = null;
     }
    for (let i in info) {
    document.getElementById("tab").innerHTML +=
    `<tr><td>${i}</td><td>${info[i]}</td></tr>`;
     }
     cnt++;
    }
    