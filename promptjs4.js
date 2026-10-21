const prompt = require('prompt-sync')();
n=prompt("nombre")
l=n.toString()
l1=l.length
let j=0
let k=0
for(;j<l1;){
    k+=Math.pow(l[j],l1)
    j+=1
}
console.log(n!=k?"not":"","strong power number")
console.log(k)
