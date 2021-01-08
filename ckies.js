let products = [
    { name: "Brulee", price: 1000, calories: 70 },
    { name: "Dates", price: 300, calories: 100 },
    { name: "Oreo", price: 750, calories: 50 },
];

let cart = [];
let totalprice = 0

function addproduct(index){
    let product = products[index];
    totalprice += product.price

    cart.push(product)
    console.log(cart)

    let list = document.getElementById(`list`)
    list.innerHTML += `<li> ${product.name} , ${product.price} </li>`
    document.getElementById(`total`).innerText = `total: ${totalprice}`
}
