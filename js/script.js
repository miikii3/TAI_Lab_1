let array = [];
let result = "";

for(let i = 1 ; i <= 10 ; i++){
    for(let j = 1 ; j <= 10 ; j++){
        array.push(j + "*" + i + " = " + (i*j) + "\t  " )
    }
    array.push("\n")
}

for(let i = 0 ; i < array.length ; i++){
    result += array[i]
}

console.log(result)