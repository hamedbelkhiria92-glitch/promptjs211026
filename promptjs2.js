const prompt = require('prompt-sync')();
x=prompt("nombre")
y=2
for(;y<x;y+=2){
    console.log(y)
}
z=2
for(;z<x;z++){
    if(z%2==0){
        console.log(z)
    }
}