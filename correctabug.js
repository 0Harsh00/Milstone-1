const cart = [
    {name:'product 1',quantity:2},
    {name:'product 2',quantity:3},
    {name:'product 3',quantity:1}
]
function bugremover(){
    for(let i = 0;i<cart.length;i++){
        cart[i].quantity *=2;  
    }
}
bugremover(cart);
console.log(cart);
