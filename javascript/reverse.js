const sentence= 'hello everyone what do you now.';
let reverse =''

for(const letter of sentence){
    // console.log(letter);
    reverse=letter+reverse;
}
// console.log(reverse)


const numbers =[3,643,643,674,745,7,];


for(let i=0; i<numbers.length;i++){
    //  console.log(numbers)
}


const fruits =['apple','orenged','banana','manggo','jambura'];


for(let i=1; i<fruits.length;i++){
    // console.log(fruits)

}

fruits.forEach(function(fruits){
    // console.log(fruits);
})


let position =fruits.indexOf('manggo');
// console.log(position)



// console.log(fruits.includes('apple'))
// console.log(fruits.includes('stobery'))


// input cheek practise

const password ='1234'

while(password !== '1234'){
    password=prompt('enter Your password')
}
console.log('asses granted')