let user_name ='harsh is a known for its'
let arr = user_name.split(" ")
for (let i =0; i <arr.length;i++){
    arr[i] = arr[i].charAt(0).toUpperCase(2)+arr[i].slice(1)
}
let arr2 = arr.join(" ");
console.log(arr2);

//next question

