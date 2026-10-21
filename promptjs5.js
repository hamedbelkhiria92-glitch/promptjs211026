target=4
let arr=[1,2,2,3,8,7]

let arr1=arr.sort()
let arr2=arr1
let indice=0

arr1.forEach(h1=>{
    indice1=0
    arr2.forEach(h2=>{
        if(h2+h1==target){
            if(indice!=indice1){
            console.log(indice,indice1)
        }
    }
        indice1+=1
    })
    indice+=1
})
console.log(arr1)