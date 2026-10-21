const prompt = require('prompt-sync')();
n=prompt("nombre")
t=[]

for(let i=1;i<n;i++){
    let x = (n%i==0)?t.push(i): null;
}
y=0
 
let z = t.reduce((a, b) => a + b, 0);
console.log(z)
console.log(n==z?"parfait":"non parfait")
console.log(t)
console.log("works")