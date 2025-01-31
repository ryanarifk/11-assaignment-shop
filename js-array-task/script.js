const fruits =['apple','banana','lemon','clemon','slemon'];
console.log(fruits[3]);

fruits[3]='jambura';
console.log(fruits);


const destinations=['coxbazar','sajek','sentmartin'];

destinations.push('greenvally');
 
console.log(destinations);

destinations.push('rangamati','belkuchi','nator');
console.log(destinations);

destinations.pop('nator');
console.log(destinations);

const books=['accuracy','camel','ld'];

console.log(books.includes('javascript book'));

if (books.includes('javascript book'))
{
    console.log('ho ache')
}
else{

    console.log('nare bhai nai')
}